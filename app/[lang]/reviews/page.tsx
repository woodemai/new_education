import { Review } from "@prisma/client";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionaries";
import { List } from "@/components/shared/list";
import { ReviewCard } from "@/components/entities/review";
import { getReviews } from "@/utils/review";
import Header from "@/components/pages/review/header/Header";

const renderReview = (review: Review) => {
    return <ReviewCard {...review} key={review.id} />
}
export const revalidate = 10;

interface Props { params: { lang: Locale } }

const ReviewsPage = async ({ params }: Props) => {

    const { reviewsPage } = await getDictionary(params.lang);

    const reviews = await getReviews();

    return (
        <>
            <Header {...reviewsPage.header}/>
            {!reviews.length && <h2>{reviewsPage.noReviews}</h2>}
            <List items={reviews} element={review => renderReview(review)} heading={reviewsPage.heading} />
        </>
        );
}
export default ReviewsPage