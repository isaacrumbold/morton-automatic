const express = require("express");
const path = require("path");
const app = express();
const fs = require("fs");
const cors = require("cors");
const multer = require("multer");
require("dotenv").config();

const isProduction = process.env.IS_PRODUCTION === "true" ? true : false;
const url = isProduction ? process.env.PROD_BASE_URL : process.env.DEV_BASE_URL;
const filePath = isProduction
  ? process.env.PROD_FILE_PATH
  : process.env.DEV_FILE_PATH;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const path = isProduction
      ? `.${filePath}/portfolioImages/${req.body.id}`
      : `.${filePath}/public/portfolioImages/${req.body.id}`;
    fs.mkdirSync(path, { recursive: true });
    cb(null, path);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

app.use(express.json());
app.use(cors());
// const corsOptions = {
//   origin: "http://localhost:1234/editor",
//   optionsSuccessStatus: 200,
// };

// this will eventually server the editor UI
app.use("/", express.static(path.join(__dirname + filePath)));
app.get("/", (req, res) => {
  res.sendFile(__dirname + `${filePath}/index.html`);
});

// this will write and save the json file
app.post("/api", (req, res) => {
  res.json({
    message: "we got your message",
  });

  fs.writeFile(filePath, JSON.stringify(req.body), (err) => {
    if (err) {
      console.error(err);
    }
  });
});

app.post("/deletefolder", (req, res) => {
  res.json({
    message: "we got your message",
  });
  imgArr.forEach((id) => {
    fs.rmSync(
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
