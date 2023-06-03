"use client";
import List from "@/components/List";
import Button from "@/components/Button";
import {useEffect, useState} from "react";
import ReviewBlock from "@/components/ReviewBlock";
import ListLoader from "@/components/loading/reviews/ListLoader";
import {Review} from "@prisma/client";



const renderReview = (review: Review) => {
    return <ReviewBlock review={review} key={review.id}/>
}
export default function ReviewsPage() {
    const [reviews, setReviews] = useState<Review[] | null>(null);
    const getReviews = async () => {
        const reviews = await fetch('/api/reviews/getAll').then((res) => res.json());
        setReviews(reviews);
    };
    useEffect(() => {
        getReviews()
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