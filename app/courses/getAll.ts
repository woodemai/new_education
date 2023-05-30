'use server'
import prisma from "@/lib/prisma";

export async function getAll() {
    return prisma.course.findMany({
        orderBy: {
            title: 'desc'
        }
    });
}