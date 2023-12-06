import express, { json } from "express";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { mkdirSync, writeFile, rmSync } from "fs";
import multer, { diskStorage } from "multer";
import "dotenv/config";

const app = express();

//vars
const isProduction = process.env.IS_PRODUCTION === "true" ? true : false;
const url = isProduction ? process.env.PROD_BASE_URL : process.env.DEV_BASE_URL;
const filePath = isProduction
  ? process.env.PROD_FILE_PATH
  : process.env.DEV_FILE_PATH;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const storage = diskStorage({
  destination: (req, file, cb) => {
    const path = isProduction
      ? `.${filePath}/portfolioImages/${req.body.id}`
      : `.${filePath}/public/portfolioImages/${req.body.id}`;
    mkdirSync(path, { recursive: true });
    cb(null, path);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

app.use(json());

// this will eventually server the editor UI
app.use("/", express.static(join(__dirname + filePath)));
app.get("/", (req, res) => {
  res.sendFile(__dirname + `${filePath}/index.html`);
});

// this will write and save the json file
app.post("/api", (req, res) => {
  res.json({
    message: "we got your message",
  });

  writeFile(
    `.${filePath}/json/projects.json`,
    JSON.stringify(req.body),
    (err) => {
      if (err) {
        console.error("File Error:\n", err);
      }
    }
  );
});

app.post("/deletefolder", (req, res) => {
  res.json({
    message: "we got your message",
  });

  req.body.idArray.forEach((id) => {
    rmSync(
      isProduction
        ? `.${filePath}/portfolioImages/${id}`
        : `.${filePath}/public/portfolioImages/${id}`,
      { recursive: true, force: true },
      (err) => {
        if (err) {
          console.error(err);
        }
      }
    );
  });
});

app.post("/projectimage", upload.single("image"), (req, res) => {
  res.json({
    message: "image uploaded",
  });
});

app.post("/exampleimages", upload.array("images", 6), (req, res) => {
  res.json({
    message: "images uploaded",
  });
});

app.listen(3000, () => {
  console.log("Application started and Listening on port 3000");
  console.log(`serving UI at: ${url}`);
});
