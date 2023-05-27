import prisma from "@/lib/prisma";
import {NextApiRequest, NextApiResponse} from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
    const {id} = req.query;
    if (req.method === "GET") {
        const course = await prisma.course.findUnique({
            where: {
                id: String(id)
            }
        })
        if (course === null) {
            res.status(404).json("Not Found");
        } else {
            res.status(200).json(course);
        }
    } else if (req.method === "DELETE") {
        await prisma.course.delete({
            where: {
                id: String(id)
            }
        })
        res.json(200);
    }
}