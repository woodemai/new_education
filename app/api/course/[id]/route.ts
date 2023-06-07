import prisma from "@/lib/prisma";
import {NextRequest, NextResponse} from "next/server";

export async function GET(request: NextRequest, {params}: { params: { id: string } }) {
    const {id} = params;
    const course = await prisma.course.findUnique({
        where: {id}
    });
    return course
        ? NextResponse.json(course, {status: 200})
        : NextResponse.json({error: "Not found"}, {status: 404});
}