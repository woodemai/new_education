import prisma from "@/lib/prisma";
import {NextRequest, NextResponse} from "next/server";

export async function GET(request: NextRequest, {params}: { params: { id: string } }) {
    const {id} = params;
    const lesson = await prisma.lesson.findUnique({
        where: {
            id
        }
    });
    return lesson
        ? NextResponse.json(lesson, {status: 200})
        : NextResponse.json({error: "Not Found"}, {status: 404});
}