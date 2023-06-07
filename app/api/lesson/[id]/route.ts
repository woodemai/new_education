import prisma from "@/lib/prisma";
import {NextResponse} from "next/server";

export async function GET(id: string) {
    const lesson = await prisma.lesson.findUnique({
        where: {
            id
        }
    });
    return lesson
        ? NextResponse.json(lesson, {status: 200})
        : NextResponse.json({error: "Not Found"}, {status: 404});
}