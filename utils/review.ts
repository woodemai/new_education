import prisma from "@/lib/prisma"

export const getReviews = async (len?: number) => {
    return prisma.review.findMany({take: len, orderBy: {createdAt: 'desc'}});
}