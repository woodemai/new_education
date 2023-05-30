import prisma from "@/lib/prisma";
import List from "@/components/List";
import {ReviewProps} from "@/lib/interfaces";
import Review from "@/components/Review";
import Button from "@/components/Button";

export default async function ReviewsPage() {
    const reviews = await prisma.review.findMany();
    if (!reviews.length) {
        return (
            <>
                <h2>No reviews yet</h2>
                <Button href={'/reviews/add'}>Add new review</Button>
            </>
        )
    }
    return (
        <>
            <List items={reviews}
                  element={(review: ReviewProps) => <Review name={review.title} description={review.body}/>} heading={'All reviews'}/>
        </>
    )
}