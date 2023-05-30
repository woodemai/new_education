"use client";
import List from "@/components/List";
import {ReviewProps} from "@/lib/interfaces";
import Button from "@/components/Button";
import {useEffect, useState} from "react";
import {Review} from "@prisma/client";
import ReviewBlock from "@/components/ReviewBlock";
import {getAll} from "@/app/reviews/getAll";

export const revalidate = 0;
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
                  element={(review: ReviewProps) => <ReviewBlock key={review.id} name={review.title} description={review.body}/>}
                  heading={"All reviews"}/>
        </>
    );
}