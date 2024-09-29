import * as convert from "xml2js";
import axios from "axios";
import puppeteer from "puppeteer";
import xml2js from "xml2js";
import { logger } from "../utils/logger.js";

// Fetch the RSS feed and convert it to JSON
export async function fetchXmlFromRssFeed(url) {
  try {
    logger.info(`Fetching XML from: ${url}`);

    // Launch Puppeteer browser and open a new page
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3"
    );

    // Navigate to the URL and wait for the network to be idle
    const response = await page.goto(url, { waitUntil: "networkidle2" });

    // Check content type to ensure it's XML
    const contentType = response.headers()["content-type"];
    if (
      !contentType ||
      (!contentType.includes("application/rss+xml") &&
        !contentType.includes("application/xml") &&
        !contentType.includes("text/xml"))
    ) {
      throw new Error(`Expected RSS XML content, but received ${contentType}`);
    }

    // Get the page content
    const content = await page.content();
    logger.info(
      "XMLParser :: fetchXmlFromRssFeed :: Page content fetched successfully"
    );

    // Close the browser
    await browser.close();

    // Parse XML to JSON
    const parser = new xml2js.Parser({
      trim: true,
      explicitArray: false,
      mergeAttrs: true,
    });
    const result = await parser.parseStringPromise(content.trim());

    // Convert result to JSON string
    const jsonContent = JSON.stringify(result, null, 4);
    return jsonContent;
  } catch (error) {
    logger.error(
      `XMLParser :: fetchXmlFromRssFeed :: Error fetching XML from ${url}:`,
      error.message
    );
    throw new Error(
      "xmlParser :: fetchXmlFromRssFeed() -> Error fetching XML: " +
        error.message
    );
  }
}

export async function getHtml(url) {
  try {
    const browser = await puppeteer.launch({
      executablePath: "/usr/bin/chromium-browser",
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();
    await page.setJavaScriptEnabled(false);
    await page.setRequestInterception(true);
    page.on("request", (req) => {
      if (["image", "stylesheet", "font"].includes(req.resourceType())) {
        req.abort();
      } else {
        req.continue();
      }
    });
    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3"
    );

    // Navigate to the URL and wait for the network to be idle
    const response = await page.goto(url, {
      waitUntil: "domcontentloaded",
      timeout: 60000, // Increase timeout to 60 seconds waitUntil: "networkidle2"
    });
    const content = await page.content();
    // Close the browser
    await browser.close();
    return content;
  } catch (error) {
    logger.error(
      `XMLParser :: getHtml :: Error fetching HTML from ${url}:`,
      error.message
    );
    throw new Error(
      "xmlParser :: getHtml() -> Error fetching HTML: " + error.message
    );
  }
}
