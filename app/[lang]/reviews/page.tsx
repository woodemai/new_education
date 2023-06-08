import List from "@/components/List";
import Button from "@/components/Button";
import ReviewBlock from "@/components/ReviewBlock";
import ListLoader from "@/components/loading/reviews/ListLoader";
import {Review} from "@prisma/client";
import {Locale} from "@/i18n-config";
import {getDictionary} from "@/get-dictionaries";
import prisma from "@/lib/prisma";

const renderReview = (review: Review) => {
    return <ReviewBlock review={review} key={review.id}/>
}
export default async function ReviewsPage({params: {lang}}: { params: { lang: Locale } }) {
    const {reviewsPage} = await getDictionary(lang);
    const reviews = await prisma.review.findMany({
        orderBy: {
            createdAt: "desc"
        },
        take: 10
    });

    if (reviews == null) {
        return (
            <ListLoader/>
        );
    }
    if (!reviews.length) {
        return (
            <>
                <h2>{reviewsPage.noReviews}</h2>
                <Button href={"/reviews/add"}>{reviewsPage.header.addReview}</Button>
            </>
        );
    }
    return (
        <>
            <List items={reviews}
                  element={(review: Review) => renderReview(review)}
                  heading={reviewsPage.heading}/>
        </>
    );
}