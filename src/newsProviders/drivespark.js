import {
  processRssLink,
  loopThroughEachNews,
  fetchNewsDescriptionWithLink,
  createDocumentToInsert,
} from "../newsProcessors/index.js";

import {
  getRssLinksFromDB,
  getDatabaseCollection,
} from "../database/databaseOperations.js";

import { categorizeNews } from "../utils/categorizeNews.js";

export async function drivesparkMain() {
  const rssLinks = await getRssLinksFromDB("DriveSpark");
  //console.log("RSSLinks DriveSpark", rssLinks);

  const collection = await getDatabaseCollection(
    process.env.DB_NAME,
    process.env.NEWS_HUB,
    "DriveSpark"
  );

  for (const rssLink of rssLinks) {
    await processRssLink(rssLink, (xml) =>
      loopThroughEachNews(
        xml,
        collection,
        (link) => fetchNewsDescriptionWithLink(link),
        (item, desc) => {
          return createDocumentToInsert(
            item,
            desc,
            "DriveSpark",
            "Automobile",
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
