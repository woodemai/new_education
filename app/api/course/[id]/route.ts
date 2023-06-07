import prisma from "@/lib/prisma";
import {NextRequest, NextResponse} from "next/server";

export async function GET(request: NextRequest) {
    console.log(request)
    const id = "";
    const course = await prisma.course.findUnique({
        where: {id: String(id)}
    });
    return course
        ? NextResponse.json(course, {status: 200})
        : NextResponse.json({error: "Not found"}, {status: 404});
}