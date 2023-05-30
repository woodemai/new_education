'use server'
import prisma from "@/lib/prisma";

export async function getAll(courseId: string) {
    return prisma.lesson.findMany({where: {
        courseId
        }});
}