import React, {FC} from 'react';
import ReactMarkdown from "react-markdown";
import styles from '../styles/reviews.module.css'
import {Review} from "@prisma/client";


const Item: FC<{ review: Review }> = ({review}) => {
    const createdAt = review.createdAt;
    const data = createdAt.getUTCHours()
        + ":" + createdAt.getUTCMinutes()
        + " - " + createdAt.getUTCDay()
        + "." + createdAt.getUTCMonth()
        + "." + createdAt.getUTCFullYear();
    return (
        <div className={styles.item}>
            <div className={styles.item__inner}>
                <h3>{review.title}</h3>
                <ReactMarkdown>{review.body}</ReactMarkdown>
                <ReactMarkdown className={styles.author}>{data}</ReactMarkdown>
                <ReactMarkdown className={styles.author}>{review.author}</ReactMarkdown>
            </div>
        </div>
    );
};

export default Item;