import prisma from "@/lib/prisma";
import {NextApiRequest, NextApiResponse} from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
    const {id} = req.query;
    if (req.method === "GET") {
        const lesson = await prisma.lesson.findUnique({
            where: {
                id: String(id)
            },
        })
        res.status(200).json(lesson);

    }else if (req.method === "DELETE") {
        await prisma.lesson.delete({
            where: {
                id: String(id)
            }
        })
        res.json(200);
    } else {
        res.status(404).json({message: "Not Found"});
    }
}