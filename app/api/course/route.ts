import prisma from "@/lib/prisma";
import {NextRequest, NextResponse} from "next/server";

export const revalidate = 0;

export async function GET() {
    const courses = await prisma.course.findMany();
    return courses.length
        ? NextResponse.json(courses, {status: 200})
        : NextResponse.json({error: "Not found"}, {status: 404});
}

export async function POST(request: NextRequest) {
    try {
        const json = await request.json();
        const course = await prisma.course.create({
            data: json,
        });
        return NextResponse.json(course, {status: 200})
    } catch (error: any) {
        return NextResponse.json(error.message, {status: 500});
    }
}