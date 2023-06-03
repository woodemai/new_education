'use server'
import prisma from "@/lib/prisma";
import {Review} from "@prisma/client";

export default async function addReview(review: Review) {
    const {title, body, author} = review;
    await prisma.review.create({
        data: {
            title,
            body,
            author,
        }
    })
}