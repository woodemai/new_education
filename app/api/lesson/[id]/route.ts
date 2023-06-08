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

export async function PATCH(request: NextRequest, {params}: { params: { id: string } }) {
    const {id} = params;
    const json = await request.json();
    const lesson = await prisma.lesson.update({
        where: {
            id,
        },
        data: json,
    });
    return lesson
        ? NextResponse.json(lesson, {status: 200})
        : new NextResponse(`No lesson with id ${id} found`, {status: 404});
}

export async function DELETE(request: NextRequest, {params}: { params: { id: string } }) {
    const {id} = params;
    const lesson = await prisma.lesson.delete({
        where: {
            id,
        },
    });
    return lesson
        ? NextResponse.json(lesson, {status: 200})
        : new NextResponse(`No lesson with id ${id} found`, {status: 404});
}