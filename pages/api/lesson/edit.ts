import prisma from "@/lib/prisma";
import {NextApiRequest, NextApiResponse} from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
    if (req.method === 'PUT') {
        const {id, title, body} = req.body;
        const course = await prisma.lesson.update({
            where: {
                id: id,
            },
            data: {
                title: title,
                body: body,
            }
        })
        res.status(200).json(course);
    } else {
        res.status(404).json({message: "Not Found"});
    }
}