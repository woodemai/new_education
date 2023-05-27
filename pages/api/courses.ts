import prisma from "@/lib/prisma";
import {NextApiRequest, NextApiResponse} from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
    if (req.method === "GET") {
        const courses = await prisma.course.findMany()
        res.status(200).json(courses);

    } else {
        res.status(404).json({message: "Not Found"});
    }
}