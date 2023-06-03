import React, {FC, useEffect, useState} from "react";
import ReactMarkdown from "react-markdown";
import styles from "../styles/reviews.module.css";
import {Review} from "@prisma/client";


const Item: FC<{ review: Review }> = ({review}) => {
    console.log(review);
    const createdAt = review.createdAt.toString();
    console.log(createdAt)
    const [date, setDate] = useState<string>("");
    useEffect(() => {
        setDate(createdAt);
    }, [review.createdAt]);
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