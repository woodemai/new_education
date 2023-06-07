import {NextRequest, NextResponse} from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: NextRequest) {
    try {
        const json = await request.json();
        const lesson = await prisma.lesson.create({
            data: json,
        });
        return NextResponse.json(lesson, {status: 200})
    } catch (error: any) {
        return NextResponse.json(error.message, {status: 500});
    }
}