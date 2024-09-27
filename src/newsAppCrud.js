import { MongoClient } from "mongodb";

export async function connectToCluster(uri) {
  let mongoClient;

  try {
    mongoClient = new MongoClient(uri);
    console.log("Connecting to MongoDB Atlas cluster...");
    await mongoClient.connect();
    console.log("Successfully connected to MongoDB Atlas!");

    return mongoClient;
  } catch (error) {
    console.error("Connection to MongoDB Atlas failed!", error);
    process.exit();
  }
}

export async function createNewsAppDocument(collection, newsAppDocument) {
  // const newsAppDocument = {
  //   title: "Lok Sabha Polls",
  //   description:
  //     "As many as 25.4 million voters are eligible to vote in the first phase of the polling in Rajasthan for 114 candidates at around 23,000 polling booths",
  //   tag: ["For you", "Election", "Lok Sabha"],
  // };

  await collection.insertOne(newsAppDocument);
}

export async function findNewsByTag(collection, tag1) {
  return collection.find({ tag: tag1 }).toArray();
}

export async function isDuplicateNews(collection, link) {
  const document = await collection.findOne({ link });
  //console.log("document", document);
  return !!document;
}
export async function updateStudentsByTitle(collection, title, updatedFields) {
  await collection.updateMany({ title }, { $set: updatedFields });
}

//Refer this url for MongoDB: https://www.mongodb.com/languages/javascript/mongodb-and-npm-tutorial
