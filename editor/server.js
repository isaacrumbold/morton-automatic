const express = require("express");
const path = require("path");
const app = express();
const fs = require("fs");
const cors = require("cors");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log(req.body);
    const path = `./uploads/${req.body.id}`;
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

app.use("/", express.static(path.join(__dirname + "/dist")));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/editor_ui/dist/index.html");
});
// this will eventually server the editor UI

app.post("/api", (req, res) => {
  res.json({
    message: "we got your message",
  });

  fs.writeFile("./projects.json", JSON.stringify(req.body), (err) => {
    if (err) {
      console.error(err);
    }
  });
});
// this will write and save the json file

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
});
