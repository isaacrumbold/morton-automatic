import { writeFile } from "fs";
import { Request, Response } from "express";

export const createProjectOrExample = (req: Request, res: Response, filePath: string | undefined) => {
    writeFile(
        `.${filePath}/json/projects.json`,
        JSON.stringify(req.body), (err: any) => {
            if (err) throw err
            console.log("file successfully written")
        }
    )
    res.status(200).json(req.body)
}

export const uploadImageSingle = (res: Response) => {
    res.status(200).send("Single image uploaded successfully")
}

export const uploadImageMultiple = (res: Response) => {
    res.status(200).send("Multiple images uploaded successfully")
}