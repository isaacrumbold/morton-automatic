import express, { json } from "express";
import { dirname, join } from "path";
import "dotenv/config";
import cors from "cors";
import { isProduction, url, filePath, uploader } from "./utils/index.ts";
import { createProjectOrExample, uploadImageMultiple, uploadImageSingle } from "./routes/post.ts";
import { fileURLToPath } from "url";
import { deleteDirectory } from "./routes/delete.ts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(json());
app.use(cors());
app.use("/", express.static(join(__dirname + filePath)));

app.get("/", (req, res) => {
    res.sendFile(__dirname + `${filePath}/index.html`);
});

app.post("/api", (req, res) => createProjectOrExample(req, res, filePath));
app.post("/deletefolder", (req, res) => deleteDirectory(req, res, isProduction, filePath));
app.post("/projectimage", uploader.single("image"), (req, res) => uploadImageSingle(res));
app.post("/exampleimages", uploader.array("images", 6), (req, res) => uploadImageMultiple(res));

app.listen(3000, () => {
    console.log("Application started and Listening on port 3000");
    console.log(`serving UI at: ${url}`);
});