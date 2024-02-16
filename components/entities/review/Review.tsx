'use client'
import styles from "./review.module.css";
import { Review } from "@prisma/client";


const ReviewCard = ({ review }: { review: Review }) => {
    const date = "";
    return (
        <div className={styles.item}>
            <div className={styles.item__inner}>
                <h3>{review.title}</h3>
                <p>{review.body}</p>
                <p className={styles.author}>{date}</p>
                <p className={styles.author}>{review.author}</p>
            </div>
        </div>
    );
};

export default ReviewCard;