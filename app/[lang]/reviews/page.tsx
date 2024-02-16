import { Review } from "@prisma/client";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionaries";
import { Button } from "@/components/shared/button";
import { List } from "@/components/shared/list";
import { ReviewCard } from "@/components/entities/review";
import prisma from "@/lib/prisma";


const renderReview = (review: Review) => {
    return <ReviewCard review={review} key={review.id} />
}
export const revalidate = 10;

interface Props { params: { lang: Locale } }

const ReviewsPage = async ({ params }: Props) => {

    const { reviewsPage } = await getDictionary(params.lang);

    const reviews = await prisma.review.findMany({
        orderBy: {
            createdAt: "desc"
        },
        take: 10
    });

    if (!reviews.length) {
        return (
            <>
                <h2>{reviewsPage.noReviews}</h2>
                <Button href={"/reviews/add"}>{reviewsPage.header.addReview}</Button>
            </>
        );
    }

    return (
        <List items={reviews} element={review => renderReview(review)} heading={reviewsPage.heading} />
    );
}
export default ReviewsPage