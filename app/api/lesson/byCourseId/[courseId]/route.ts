import prisma from "@/lib/prisma";
import {NextRequest, NextResponse} from "next/server";

export async function GET(request: NextRequest, {params}: { params: { courseId: string } }) {
    const {courseId} = params;
    const lessons = await prisma.lesson.findMany({
        where: {
            courseId,
        }
    })
    return lessons.length
        ? new NextResponse(JSON.stringify(lessons), {status: 200, headers: {"Content-Type": "application/json"},})
        : NextResponse.json({error: "Not found"}, {status: 404});

}