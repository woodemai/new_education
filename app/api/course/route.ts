import prisma from "@/lib/prisma";
import {NextResponse} from "next/server";

export const revalidate = 0;

export async function GET() {
    const courses = await prisma.course.findMany();
    return courses.length
        ? NextResponse.json(courses, {status: 200})
        : NextResponse.json({error: "Not found"}, {status: 404});
}