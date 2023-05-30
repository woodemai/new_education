'use server'
import prisma from "@/lib/prisma";
import {ReviewProps} from "@/lib/interfaces";

export default async function addReview(review: ReviewProps) {
    const {title, body, author} = review;
    await prisma.review.create({
        data: {
            title,
            body,
            author,
            published: false,
        }
    })
}