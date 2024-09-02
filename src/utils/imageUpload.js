import axios from "axios";
import FormData from "form-data";
import fs from "fs";
import path from "path";

function fileExists(filePath) {
  return fs.existsSync(filePath);
}

export async function uploadFile(filePath) {
  console.log("FILEPATH in uploadFile:: ", filePath);
  const fileName = path.resolve(filePath);

  const formData = new FormData();
  formData.append("file", fs.createReadStream(filePath));
  console.log("Inside ImageUpload :: uploadFile");
  try {
    const response = await axios.post(
      "https://api.file.coffee/file/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log("Response from file coffee: ", response.data);
    return response.data;
  } catch (error) {
    console.error("Error:");
    throw error;
  }
}

export async function downloadImage(url) {
  const timestamp = Date.now();
  console.log(timestamp);
  const filename = timestamp + ".jpg";
  const savePath = path.join("./src/SaveImages", filename);
  try {
    const response = await axios({
      url,
      responseType: "stream",
    });

    // Ensure the directory exists
    const dir = path.dirname(savePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Create a writable stream and save the image
    const writer = fs.createWriteStream(savePath);
    response.data.pipe(writer);
    const fileSave = new Promise((resolve, reject) => {
      writer.on("finish", resolve);
      writer.on("error", reject);
    });
    console.log("FILEPATH in download file:: ", savePath);
    fileSave.then(uploadFile(savePath));
  } catch (error) {
    console.error(`Error downloading image: ${error}`);
  }
}
