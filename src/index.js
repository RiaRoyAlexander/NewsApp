import cron from "node-cron";
import { news18Main } from "./newsProviders/news18.js";
import { drivesparkMain } from "./newsProviders/drivespark.js";
import { ndTvMain } from "./newsProviders/ndtv.js";
import { oneIndiaMain } from "./newsProviders/oneIndia.js";
import { deshabhimaniMain } from "./newsProviders/deshabhimani.js";
import {} from "./newsProcessors/index.js";
import { config } from "dotenv";
import { logger } from "./utils/logger.js";
import { deleteOldNews } from "./database/databaseOperations.js";
config();

cron.schedule("*/5 * * * *", async () => {
  try {
    await news18Main();
    await drivesparkMain();
    await ndTvMain();
    await oneIndiaMain();
    await deshabhimaniMain();
  } catch (error) {
    logger.error("Src :: Index.js :: Error executing scheduled tasks:", error);
  }
});

cron.schedule("0 0 * * *", () => {
  logger.info("Running the daily job to delete old news...");
  deleteOldNews();
});
