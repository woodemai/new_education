'use server'
import prisma from "@/lib/prisma";
import {ReviewProps} from "@/lib/interfaces";

export default async function addReview(review: ReviewProps) {
    const {title, body, userId} = review;
    console.log(review)
    console.log(userId)
    await prisma.review.create({
        data: {
            title,
            body,
            userId,
            published: false,
        }
    })
}