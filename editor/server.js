const express = require("express");
const path = require("path");
const app = express();
const fs = require("fs");
const cors = require("cors");
const multer = require("multer");

////////////////////////////////////////////
const isProduction = false; //////////////// use this to set the path to write to json files
////////////////////////////////////////////

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log(req.body);
    // const path = `./editor_ui/public/portfolioImages/${req.body.id}`;
    const path = `./RightHereTest/${req.body.id}`;
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
app.use("/", express.static(path.join(__dirname + "/dist")));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/editor_ui/dist/index.html");
});

// this will write and save the json file
app.post("/api", (req, res) => {
  res.json({
    message: "we got your message",
  });

  fs.writeFile(
    "./editor_ui/public/json/projects.json",
    JSON.stringify(req.body),
    (err) => {
      if (err) {
        console.error(err);
      }
    }
  );
});

app.post("/projectimage", upload.single("image"), (req, res) => {
  console.log(req.body);
  res.json({
    message: "image uploaded",
  });
});

app.post("/exampleimages", upload.array("images", 6), (req, res) => {
  console.log("example images uploaded");
  res.json({
    message: "images uploaded",
  });
});

app.listen(3000, () => {
  console.log("Application started and Listening on port 3000");
});
