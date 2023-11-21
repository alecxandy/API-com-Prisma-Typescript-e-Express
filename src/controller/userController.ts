import { Request, Response } from "express"
import { prisma } from "../database/prismaClient"

export class userController {

    async getAll(req: Request, res: Response): Promise<Response> {
        const result = prisma.user.findMany();
        return res.status(200).json({ result });
    }

}