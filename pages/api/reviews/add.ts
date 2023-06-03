import prisma from "@/lib/prisma";
import {NextApiRequest, NextApiResponse} from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
    if (req.method === 'POST') {
        const {title, body, author} = req.body;
        const review = await prisma.review.create({
            data: {
                title,
                body,
                author
            }
        })
        res.status(200).json(review);

    } else {
        res.status(404).json({message: "Not Found"});
    }
}