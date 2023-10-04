const express = require("express");
const path = require("path");
const app = express();

app.use("/", express.static(path.join(__dirname + "/dist")));

app.listen(3000, () => {
  console.log("Application started and Listening on port 3000");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
