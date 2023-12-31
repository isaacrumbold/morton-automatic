import { mkdirSync } from "fs";
import multer, { diskStorage } from "multer";


//variable utils
export const isProduction = process.env.NODE_ENV === "production" ? true : false;
export const url = isProduction ? process.env.PROD_BASE_URL : process.env.DEV_BASE_URL;
export const filePath = isProduction
    ? process.env.PROD_FILE_PATH
    : process.env.DEV_FILE_PATH;


// image uploading utils
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
export const uploader = multer({ storage: storage });