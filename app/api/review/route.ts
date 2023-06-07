import prisma from "@/lib/prisma";
import {NextResponse} from "next/server";

export const revalidate = 0;

export async function GET() {
    const reviews = await prisma.review.findMany({
        orderBy: {
            createdAt: "desc"
        },
        take: 10
    });
    return reviews.length
        ? NextResponse.json(reviews, {status: 200})
        : NextResponse.json({error: "Not found"}, {status: 404});
}