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

export async function PATCH(request: NextRequest, {params}: { params: { id: string } }) {
    const {id} = params;
    const json = await request.json();
    const course = await prisma.course.update({
        where: {
            id,
        },
        data: json,
    });
    return course
        ? NextResponse.json(course, {status: 200})
        : new NextResponse(`No Course with id ${id} found`, {status: 404});
}

export async function DELETE(request: NextRequest, {params}: { params: { id: string } }) {
    const {id} = params;
    const course = await prisma.course.delete({
        where: {
            id,
        },
    });
    return course
        ? NextResponse.json(course, {status: 200})
        : new NextResponse(`No Course with id ${id} found`, {status: 404});
}