import {
  processRssLink,
  loopThroughEachNews,
  fetchNewsDescription,
  createDocumentToInsert,
} from "../newsProcessors/index.js";

import {
  getRssLinksFromDB,
  getDatabaseCollection,
} from "../database/databaseOperations.js";

import { categorizeNews } from "../utils/categorizeNews.js";

const descQueryList = [".oi-article-lt p"];

export async function oneIndiaMain() {
  const rssLinks = await getRssLinksFromDB("OneIndia");
  //console.log("RSSLinks OneIndia", rssLinks);

  const collection = await getDatabaseCollection(
    process.env.DB_NAME,
    process.env.NEWS_HUB,
    "OneIndia"
  );

  for (const rssLink of rssLinks) {
    await processRssLink(rssLink, (xml) =>
      loopThroughEachNews(
        xml,
        collection,
        (link) => fetchNewsDescription(link, descQueryList),
        (item, desc) => {
          const category = categorizeNews(item.category);
          return createDocumentToInsert(
            item,
            desc,
            "OneIndia",
            category,
            "Malayalam"
          );
        },
        "html.body.div[0].rss.channel.item",
        false,
        ""
      )
    );
  }
}
