import * as cheerio from "cheerio";

import {
  isDuplicateNews,
  createDocument,
} from "../database/databaseOperations.js";
import { getHtml, fetchXmlFromRssFeed } from "../utils/xmlParser.js";
import { generateUUID } from "../utils/uuidGenerator.js";
import { logger } from "../utils/logger.js";

export async function processRssLink(rssLink, processNewsCallback) {
  try {
    const xmlConvertedToJson = await fetchXmlFromRssFeed(rssLink);
    logger.info(`XML FETCHING COMPLETED for ${rssLink}`);
    if (xmlConvertedToJson) {
      await processNewsCallback(xmlConvertedToJson);
    }
  } catch (error) {
    logger.error(`Error processing ${rssLink}: ${error.message}`);
  }
}

function pathToArray(path) {
  return path
    .replace(/\[(\d+)\]/g, ".$1") // Convert indices to dot notation
    .split("."); // Split by dots to create the array
}
export async function loopThroughEachNews(
  jsonObjectString,
  collection,
  processNewsDescriptionCallback,
  createDocumentCallback,
  itemPath,
  newsDescAlreadyPresent,
  descPath
) {
  const jsonObj = JSON.parse(jsonObjectString);
  const pathArray = pathToArray(itemPath);
  const items = pathArray.reduce((acc, path) => acc?.[path], jsonObj);
  if (!Array.isArray(items)) {
    throw new Error('Invalid JSON object or missing "item" array.');
  }

  let successCount = 0;
  let failCount = 0;

  for (let item of items) {
    let newsDesc = "";
    if (!(await isDuplicateNews(collection, item.link))) {
      if (newsDescAlreadyPresent) {
        newsDesc = item[descPath];
        newsDesc = formatNewsDescription(newsDesc);
      } else {
        newsDesc = await processNewsDescriptionCallback(item.link);
      }
      const isValidNews = await validateNewsDescriptionAndCreateDocument(
        newsDesc
      );
      if (isValidNews) {
        successCount++;
        const newsToInsert = createDocumentCallback(item, newsDesc);
        await createDocument(collection, newsToInsert);
      } else {
        failCount++;
        if (failCount >= 5) {
          throw new Error("Something went wrong in the news processing flow");
        }
      }
    } else {
      logger.info("Found Duplicate News :: Stopping the iteration");
      break;
    }
  }
}

export async function fetchNewsDescription(htmlLink, descQueryList) {
  const newsDescription = await getHtml(htmlLink);
  const htmlLoader = cheerio.load(newsDescription);
  let newsDesc = null;
  for (let descQuery of descQueryList) {
    newsDesc = htmlLoader(descQuery).text();
    if (newsDesc) break;
  }
  return newsDesc;
}

export async function fetchNewsDescriptionWithLink(htmlLink) {
  //This method is specific for DriveSpark
  const newsDescription = await getHtml(htmlLink);
  const htmlLoader = cheerio.load(newsDescription);
  const articleContent = htmlLoader(".oi-article-rt p")
    .map((i, el) => htmlLoader(el).text())
    .get();
  const articleContentString = articleContent.join("\n\n");
  return articleContentString;
}

export function createDocumentToInsert(
  item,
  newsDesc,
  newsProvider,
  category,
  language
) {
  const uuid = generateUUID();
  return {
    Id: uuid,
    title: item.title,
    description: newsDesc,
    link: item.link,
    category: category || item.category,
    pubDate: item.pubDate,
    srcImageUrl:
      item["media:content"]?.url || item.enclosure?.url || "No Image URL",
    newsProvider: newsProvider,
    language: language,
  };
}

async function validateNewsDescriptionAndCreateDocument(newsDesc, item) {
  if (newsDesc.length > 100) {
    // Add additional Validations here
    return true;
  }
  return false;
}

function formatNewsDescription(content) {
  const $ = cheerio.load(content);
  let formattedText = $("p")
    .map((i, el) => $(el).text())
    .get()
    .join("\n\n");

  return formattedText;
}
