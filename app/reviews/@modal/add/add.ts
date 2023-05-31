'use server'
import prisma from "@/lib/prisma";
import {Review} from "@prisma/client";

export default async function addReview(review: Review) {
    const {title, body, author} = review;
    console.log(review)
    await prisma.review.create({
        data: {
            title,
            body,
            author,
        }
    })
}