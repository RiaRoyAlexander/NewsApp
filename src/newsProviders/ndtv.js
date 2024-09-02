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

export async function ndTvMain() {
  const rssLinks = await getRssLinksFromDB("NDTV");
  //console.log("RSSLinks NDTV", rssLinks);

  const collection = await getDatabaseCollection(
    process.env.DB_NAME,
    process.env.NEWS_HUB,
    "NDTV"
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
            "NDTV",
            category,
            "English"
          );
        },
        "html.body.div[0].rss.channel.item",
        true,
        "content:encoded"
      )
    );
  }
}
