import {NextApiRequest, NextApiResponse} from "next";
import prisma from "@/lib/prisma";
async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
    if (req.method === "GET") {
        const reviews = await prisma.review.findMany()
        res.status(200).json(reviews);

    } else {
        res.status(404).json({message: "Not Found"});
    }
}
export {handler as GET}