const express = require("express");
const path = require("path");
const app = express();
const fs = require("fs");
const cors = require("cors");

app.use(cors());
// const corsOptions = {
//   origin: "http://localhost:1234/editor",
//   optionsSuccessStatus: 200,
// };

app.use("/", express.static(path.join(__dirname + "/dist")));
app.use(express.json());
app.listen(3000, () => {
  console.log("Application started and Listening on port 3000");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/editor_ui/dist/index.html");
});

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
