import {NextApiRequest, NextApiResponse} from "next";
import prisma from "@/lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
    if (req.method === "GET") {
        const courses = await prisma.review.findMany()
        res.status(200).json(courses);

    } else {
        res.status(404).json({message: "Not Found"});
    }
}