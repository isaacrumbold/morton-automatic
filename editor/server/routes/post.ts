import { writeFile } from "fs";
import { Request, Response } from "express";

export const createProjectOrExample = (req: Request, res: Response, filePath: string | undefined) => {
    try {
        writeFile(
            `.${filePath}/json/projects.json`,
            JSON.stringify(req.body), (err: any) => {
                if (err) throw err
                console.log("file successfully written")
            }
        )
        res.status(200).json(req.body)
    } catch
    (err) {
        console.error("File Error:\n", err)
    }
}