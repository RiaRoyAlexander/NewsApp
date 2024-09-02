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

const descQueryList = ["#main-content p", ".newphtbox-in p"];

export async function deshabhimaniMain() {
  const rssLinks = await getRssLinksFromDB("Deshabhimani");
  //console.log("RSSLinks Deshabhimani", rssLinks);

  const collection = await getDatabaseCollection(
    process.env.DB_NAME,
    process.env.NEWS_HUB,
    "Deshabhimani"
  );

  for (const rssLink of rssLinks) {
    await processRssLink(rssLink, (xml) =>
      loopThroughEachNews(
        xml,
        collection,
        () => {},
        (item, desc) => {
          const category = categorizeNews(item.link);
          return createDocumentToInsert(
            item,
            desc,
            "Deshabhimani",
            category,
            "Malayalam"
          );
        },
        "html.body.div[0].rss.channel.item",
        true,
        "description"
      )
    );
  }
}
