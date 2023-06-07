import prisma from "@/lib/prisma";
import {NextRequest, NextResponse} from "next/server";

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

export async function POST(request: NextRequest) {
    try {
        const json = await request.json();
        const review = await prisma.review.create({
            data: json,
        });
        return NextResponse.json(review, {status: 200})
    } catch (error: any) {
        return NextResponse.json(error.message, {status: 500});
    }
}