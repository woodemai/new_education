import prisma from "@/lib/prisma";
import {NextApiRequest, NextApiResponse} from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
    const {id} = req.query;
    if (req.method === "GET") {
        const lessons = await prisma.lesson.findMany({
            where: {
                courseId: String(id)
            }
        })
        res.status(200).json(lessons);

    } else {
        res.status(404).json({message: "Not Found"});
    }
}