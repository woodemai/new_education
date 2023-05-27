import prisma from "@/lib/prisma";
import {NextApiRequest, NextApiResponse} from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
    if (req.method === 'POST') {
        const {title, body} = req.body;
        const course = await prisma.course.create({
            data: {
                title: title,
                body: body,
            }
        })
        res.status(200).json(course);

    } else if (req.method === 'PUT') {
        const {id, title, body, published} = req.body;
        const course = await prisma.course.update({
            where: {
                id: id,
            },
            data: {
                title: title,
                body: body,
                published: published,
            }
        })
        res.status(200).json(course);
    } else {
        res.status(404).json({message: "Not Found"});
    }
}