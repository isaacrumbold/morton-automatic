import { Request, Response } from "express";
import { rmSync } from "fs";


export const deleteDirectory = (req: Request, res: Response, isProduction: boolean, filePath: string | undefined) => {
    req.body.idArray.forEach((id: number) => {
        if (filePath === undefined) throw new Error(`file path is of type ${typeof filePath}`)
        rmSync(
            isProduction
                ? `.${filePath}/portfolioImages/${id}`
                : `.${filePath}/public/portfolioImages/${id}`,
            { recursive: true, force: true },
        )
    })
}
