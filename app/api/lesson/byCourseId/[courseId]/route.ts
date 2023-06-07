import prisma from "@/lib/prisma";
import {NextResponse} from "next/server";

export async function GET(courseId: string) {
    const lessons = await prisma.lesson.findMany({
        where: {
            courseId
        }
    });
    return lessons.length
        ? NextResponse.json(lessons, {status: 200})
        : NextResponse.json({error: "Not found"}, {status: 404});
}