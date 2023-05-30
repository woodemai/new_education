"use client";
import List from "@/components/List";
import Button from "@/components/Button";
import {useEffect, useState} from "react";
import {Review} from "@prisma/client";
import ReviewBlock from "@/components/ReviewBlock";
import {getAll} from "@/app/reviews/getAll";

export const revalidate = 0;
const renderReview = (review:Review) => {
    return <ReviewBlock review={review} key={review.id}/>
}
export default function ReviewsPage() {
    const [reviews, setReviews] = useState<Review[] | null>(null);
    const getReviews = async () => {
        const reviews = await getAll();
        setReviews(reviews);
    };
    useEffect(() => {
        getReviews();
    }, []);
    if (reviews == null) {
        return (
            <>
                <h2>Loading...</h2>
            </>
        );
    }
    if (!reviews.length) {
        return (
            <>
                <h2>No reviews yet</h2>
                <Button href={"/reviews/add"}>Add new review</Button>
            </>
        );
    }
    return (
        <>
            <List items={reviews}
                  element={(review: Review) => renderReview(review)}
                  heading={"All reviews"}/>
        </>
    );
}