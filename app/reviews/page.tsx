"use client";
import List from "@/components/List";
import Button from "@/components/Button";
import {useEffect, useState} from "react";
import ReviewBlock from "@/components/ReviewBlock";
import {getAll} from "@/app/reviews/getAll";
import ListLoader from "@/components/loading/reviews/ListLoader";
import {Review} from "@prisma/client";

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
        getReviews().then(res => {
            console.log(res)
        });
    }, []);
    if (reviews == null) {
        return (
            <ListLoader/>
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