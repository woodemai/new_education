import prisma from "@/lib/prisma";
import {NextApiRequest, NextApiResponse} from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
    if (req.method === "GET") {
        const lessons = await prisma.lesson.findMany()
        res.status(200).json(lessons);

    } else {
        res.status(404).json({message: "Not Found"});
    }
}