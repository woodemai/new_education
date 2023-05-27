import prisma from "@/lib/prisma";
import {NextApiRequest, NextApiResponse} from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
    if (req.method === 'POST') {
        const {title, body, courseId} = req.body;
        const lesson = await prisma.lesson.create({
            data: {
                courseId: courseId,
                title: title,
                body: body,
            }
        })
        res.status(200).json(lesson);

    } else {
        res.status(404).json({message: "Not Found"});
    }
}