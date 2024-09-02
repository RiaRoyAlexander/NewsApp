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

export async function news18Main() {
  const rssLinks = await getRssLinksFromDB("News18");
  //console.log("RSSLinks NEWS18", rssLinks);

  const collection = await getDatabaseCollection(
    process.env.DB_NAME,
    process.env.NEWS_HUB,
    "News18"
  );

  for (const rssLink of rssLinks) {
    await processRssLink(rssLink, (xml) =>
      loopThroughEachNews(
        xml,
        collection,
        (link) => fetchNewsDescription(link, descQueryList),
        (item, desc) => {
          const category = categorizeNews(item.link);
          return createDocumentToInsert(
            item,
            desc,
            "News18",
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
