import { MongoClient } from "mongodb";
import { logger } from "../utils/logger.js";
export async function connectToCluster(uri) {
  let mongoClient;

  try {
    mongoClient = new MongoClient(uri);
    //console.log("Connecting to MongoDB Atlas cluster...");
    await mongoClient.connect();
    logger.info("Successfully connected to MongoDB Atlas!");

    return mongoClient;
  } catch (error) {
    logger.error("Connection to MongoDB Atlas failed!", error);
    process.exit();
  }
}

export async function createDocument(collection, document) {
  await collection.insertOne(document);
}

export async function findNewsByTag(collection, tag1) {
  return collection.find({ tag: tag1 }).toArray();
}

export async function isDuplicateNews(collection, link) {
  const document = await collection.findOne({ link });
  return !!document;
}

export async function updateNewsByTitle(collection, title, updatedFields) {
  await collection.updateMany({ title }, { $set: updatedFields });
}

export async function getRssLinksFromDB(tag) {
  const uri = process.env.DB_URI;
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const database = client.db(process.env.DB_NAME);
    const collection = database.collection(process.env.RSS_LINKS);
    const rssLinks = await collection.find({ tag: tag }).toArray();
    return rssLinks.map((link) => link.url);
  } finally {
    await client.close();
  }
}

export async function getDatabaseCollection(database, table, newsProvider) {
  const uri = process.env.DB_URI;
  const mongoClient = await connectToCluster(uri);
  logger.info("Connected to DB from ", newsProvider);

  const db = mongoClient.db(database);
  const collection = db.collection(table);

  return collection;
}

export async function deleteOldNews() {
  try {
    const collection = await getDatabaseCollection(
      process.env.DB_NAME,
      process.env.NEWS_HUB,
      "DELETE"
    );

    // Calculate the date 2 days ago from now
    const twoDaysAgo = new Date();
    twoDaysAgo.setDate(twoDaysAgo.getDate() - 30);

    // Define a function to parse pubDate
    const parsePubDate = (dateStr) => {
      return parse(dateStr, "EEE, dd MMM yyyy HH:mm:ss xx", new Date());
    };

    // Delete news where pubDate is older than 2 days
    const result = await collection.deleteMany({
      pubDate: {
        $lt: twoDaysAgo.toISOString(),
      },
    });

    logger.info(`${result.deletedCount} news items deleted`);
  } catch (error) {
    logger.error(`Error deleting old news: ${error.message}`);
  } finally {
    await client.close();
  }
}

//Refer this url for MongoDB: https://www.mongodb.com/languages/javascript/mongodb-and-npm-tutorial
