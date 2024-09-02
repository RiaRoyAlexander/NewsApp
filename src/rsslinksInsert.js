import { MongoClient } from "mongodb";

async function insertDocuments() {
  const uri = process.env.DB_URI; // Replace with your connection string
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    const database = client.db("NewsAppDB"); // Replace with your database name
    const collection = database.collection("rssLinks"); // Replace with your collection name

    // Define the documents to insert
    const documents = [
      {
        insertOne: {
          document: {
            tag: "News18",
            url: "https://malayalam.news18.com/commonfeeds/v1/mal/rss/kerala/kochi.xml",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "News18",
            url: "https://malayalam.news18.com/commonfeeds/v1/mal/rss/sports.xml",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "News18",
            url: "https://malayalam.news18.com/commonfeeds/v1/mal/rss/kerala.xml",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "News18",
            url: "https://malayalam.news18.com/commonfeeds/v1/mal/rss/money.xml",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "News18",
            url: "https://malayalam.news18.com/commonfeeds/v1/mal/rss/life/relationship.xml",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "News18",
            url: "https://malayalam.news18.com/commonfeeds/v1/mal/rss/film/movies.xml",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "News18",
            url: "https://malayalam.news18.com/commonfeeds/v1/mal/rss/money/tech.xml",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "News18",
            url: "https://malayalam.news18.com/commonfeeds/v1/mal/rss/buzz.xml",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "News18",
            url: "https://malayalam.news18.com/commonfeeds/v1/mal/rss/career.xml",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "News18",
            url: "https://malayalam.news18.com/commonfeeds/v1/mal/rss/coronavirus-latest-news.xml",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "News18",
            url: "https://malayalam.news18.com/commonfeeds/v1/mal/rss/crime.xml",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "News18",
            url: "https://malayalam.news18.com/commonfeeds/v1/mal/rss/explained.xml",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "News18",
            url: "https://malayalam.news18.com/commonfeeds/v1/mal/rss/gulf.xml",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "News18",
            url: "https://malayalam.news18.com/commonfeeds/v1/mal/rss/ipl.xml",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "News18",
            url: "https://malayalam.news18.com/commonfeeds/v1/mal/rss/kerala-bypolls.xml",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "News18",
            url: "https://malayalam.news18.com/commonfeeds/v1/mal/rss/law.xml",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "News18",
            url: "https://malayalam.news18.com/commonfeeds/v1/mal/rss/life.xml",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "News18",
            url: "https://malayalam.news18.com/commonfeeds/v1/mal/rss/money-matters.xml",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "News18",
            url: "https://malayalam.news18.com/commonfeeds/v1/mal/rss/nattu-varthamanam.xml",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "News18",
            url: "https://malayalam.news18.com/commonfeeds/v1/mal/rss/opinion.xml",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "News18",
            url: "https://malayalam.news18.com/commonfeeds/v1/mal/rss/photos.xml",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "News18",
            url: "https://malayalam.news18.com/commonfeeds/v1/mal/rss/tv-shows.xml",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "News18",
            url: "https://malayalam.news18.com/commonfeeds/v1/mal/rss/world.xml",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "News18",
            url: "https://malayalam.news18.com/commonfeeds/v1/mal/rss/life/astro.xml",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "News18",
            url: "https://malayalam.news18.com/commonfeeds/v1/mal/rss/money/auto.xml",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "News18",
            url: "https://malayalam.news18.com/commonfeeds/v1/mal/rss/life/health.xml",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "News18",
            url: "https://malayalam.news18.com/commonfeeds/v1/mal/rss/life/religion.xml",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "News18",
            url: "https://malayalam.news18.com/commonfeeds/v1/mal/rss/life/women.xml",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "NDTV",
            url: "https://feeds.feedburner.com/ndtvnews-latest",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "NDTV",
            url: "https://feeds.feedburner.com/ndtvnews-top-stories",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "NDTV",
            url: "https://feeds.feedburner.com/ndtvnews-trending-news",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "NDTV",
            url: "https://feeds.feedburner.com/ndtvnews-india-news",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "NDTV",
            url: "https://feeds.feedburner.com/ndtvnews-world-news",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "NDTV",
            url: "https://feeds.feedburner.com/ndtvprofit-latest",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "NDTV",
            url: "https://feeds.feedburner.com/ndtvsports-latest",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "NDTV",
            url: "https://feeds.feedburner.com/ndtvsports-cricket",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "NDTV",
            url: "https://feeds.feedburner.com/gadgets360-latest",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "NDTV",
            url: "https://feeds.feedburner.com/ndtvnews-cities-news",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "NDTV",
            url: "https://feeds.feedburner.com/ndtvnews-south",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "NDTV",
            url: "https://feeds.feedburner.com/ndtvnews-indians-abroad",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "NDTV",
            url: "https://feeds.feedburner.com/ndtvcooks-latest",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "NDTV",
            url: "https://feeds.feedburner.com/ndtvnews-offbeat-news",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "NDTV",
            url: "https://feeds.feedburner.com/ndtvnews-people",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "OneIndia",
            url: "https://malayalam.oneindia.com/rss/feeds/oneindia-malayalam-fb.xml",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "OneIndia",
            url: "https://malayalam.oneindia.com/rss/feeds/malayalam-news-fb.xml",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "OneIndia",
            url: "https://malayalam.oneindia.com/rss/feeds/malayalam-astrology-fb.xml",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "OneIndia",
            url: "https://malayalam.oneindia.com/rss/feeds/malayalam-travel-fb.xml",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "OneIndia",
            url: "https://malayalam.oneindia.com/rss/feeds/oneindia-malayalam-fb.xml",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "OneIndia",
            url: "https://malayalam.oneindia.com/rss/feeds/malayalam-in-focus-fb.xml",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "OneIndia",
            url: "https://malayalam.oneindia.com/rss/feeds/malayalam-fb.xml",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "OneIndia",
            url: "https://malayalam.oneindia.com/rss/feeds/malayalam-nri-fb.xml",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "OneIndia",
            url: "https://malayalam.oneindia.com/rss/feeds/malayalam-offbeat-fb.xml",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "OneIndia",
            url: "https://malayalam.oneindia.com/rss/feeds/malayalam-thiruvananthapuram-fb.xml",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "OneIndia",
            url: "https://malayalam.oneindia.com/rss/feeds/malayalam-palakkad-fb.xml",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "OneIndia",
            url: "https://malayalam.oneindia.com/rss/feeds/malayalam-kozhikode-fb.xml",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "OneIndia",
            url: "https://malayalam.oneindia.com/rss/feeds/malayalam-wayanad-fb.xml",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "OneIndia",
            url: "https://malayalam.oneindia.com/rss/feeds/malayalam-kannur-fb.xml",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "OneIndia",
            url: "https://malayalam.oneindia.com/rss/feeds/malayalam-kasargod-fb.xml",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "OneIndia",
            url: "https://malayalam.oneindia.com/rss/feeds/malayalam-jobs-fb.xml",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "OneIndia",
            url: "https://malayalam.oneindia.com/rss/feeds/tag-kerala-assembly-elections-2021-fb.xml",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "OneIndia",
            url: "https://malayalam.oneindia.com/rss/feeds/tag-tamil-nadu-assembly-elections-2021-fb.xml",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "OneIndia",
            url: "https://malayalam.oneindia.com/rss/feeds/tag-west-bengal-assembly-elections-2021-fb.xml",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "OneIndia",
            url: "https://malayalam.oneindia.com/rss/feeds/tag-assam-assembly-elections-2021-fb.xml",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "OneIndia",
            url: "https://malayalam.oneindia.com/rss/feeds/tag-puducherry-assembly-elections-2021-fb.xml",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "DriveSpark",
            url: "https://www.drivespark.com/rss/feeds/drivespark-fb.xml",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "DriveSpark",
            url: "https://www.drivespark.com/rss/feeds/four-wheelers-fb.xml",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "DriveSpark",
            url: "https://www.drivespark.com/rss/feeds/two-wheelers-fb.xml",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "DriveSpark",
            url: "https://www.drivespark.com/rss/feeds/off-beat-fb.xml",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "Deshabhimani",
            url: "https://www.deshabhimani.com/rss/kerala",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "Deshabhimani",
            url: "https://www.deshabhimani.com/rss/mainnews",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "Deshabhimani",
            url: "https://www.deshabhimani.com/rss/editorspick",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "Deshabhimani",
            url: "https://www.deshabhimani.com/rss/national",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "Deshabhimani",
            url: "https://www.deshabhimani.com/rss/world",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "Deshabhimani",
            url: "https://www.deshabhimani.com/rss/editorial",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "Deshabhimani",
            url: "https://www.deshabhimani.com/rss/articles",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "Deshabhimani",
            url: "https://www.deshabhimani.com/rss/columns",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "Deshabhimani",
            url: "https://www.deshabhimani.com/rss/sports",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "Deshabhimani",
            url: "https://www.deshabhimani.com/rss/cinema",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "Deshabhimani",
            url: "https://www.deshabhimani.com/rss/from-the-net",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "Deshabhimani",
            url: "https://www.deshabhimani.com/rss/art-stage",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "Deshabhimani",
            url: "https://www.deshabhimani.com/rss/travel",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "Deshabhimani",
            url: "https://www.deshabhimani.com/rss/education",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "Deshabhimani",
            url: "https://www.deshabhimani.com/rss/health",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "Deshabhimani",
            url: "https://www.deshabhimani.com/rss/vehicle",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "Deshabhimani",
            url: "https://www.deshabhimani.com/rss/books",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "Deshabhimani",
            url: "https://www.deshabhimani.com/rss/technology",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "Deshabhimani",
            url: "https://www.deshabhimani.com/rss/music",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "Deshabhimani",
            url: "https://www.deshabhimani.com/rss/pravasi",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "Deshabhimani",
            url: "https://www.deshabhimani.com/rss/women",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "Deshabhimani",
            url: "https://www.deshabhimani.com/rss/life-style",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "Deshabhimani",
            url: "https://www.deshabhimani.com/rss/business",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "Deshabhimani",
            url: "https://www.deshabhimani.com/rss/agriculture",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "Deshabhimani",
            url: "https://www.deshabhimani.com/rss/career",
          },
        },
      },
      {
        insertOne: {
          document: {
            tag: "Deshabhimani",
            url: "https://www.deshabhimani.com/rss/news-videos",
          },
        },
      },
      // Add other documents similarly
    ];

    // Perform the bulk write operation
    const results = await collection.bulkWrite(documents);
    console.log("Insert results:", results);
  } catch (error) {
    console.error("Error inserting documents:", error.message);
  } finally {
    await client.close();
  }
}

insertDocuments();
