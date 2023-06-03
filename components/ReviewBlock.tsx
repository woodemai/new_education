'use client'
import {FC} from "react";
import ReactMarkdown from "react-markdown";
import styles from "../styles/reviews.module.css";
import {Review} from "@prisma/client";


const Item: FC<{ review: Review }> = ({review}) => {
    const date =
        review.createdAt.getUTCDate().toString() + "." +
        review.createdAt.getUTCMonth().toString() + "." +
        review.createdAt.getUTCFullYear().toString();
    return (
        <div className={styles.item}>
            <div className={styles.item__inner}>
                <h3>{review.title}</h3>
                <ReactMarkdown>{review.body}</ReactMarkdown>
                <ReactMarkdown className={styles.author}>{date}</ReactMarkdown>
                <ReactMarkdown className={styles.author}>{review.author}</ReactMarkdown>
            </div>
        </div>
    );
};

export default Item;