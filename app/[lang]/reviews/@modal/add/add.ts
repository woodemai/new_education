'use server'
import prisma from "@/lib/prisma";

export default async function addReview(title: string, body: string, author: string) {
    return prisma.review.create({
        data: {
            title: title,
            body: body,
            author: author
        }
    })
}