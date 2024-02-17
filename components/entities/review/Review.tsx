'use client'
import styles from "./review.module.css";

interface Props  {
    title: string,
    body: string,
    author: string,
    createdAt: Date
}
const ReviewCard = ({ title, body, author, createdAt }: Props) => {


    return (
        <div className={styles.item}>
                <h3>{title}</h3>
                <p>{body}</p>
            <p className={styles.author}>{`${author} - ${createdAt.toLocaleDateString()}`}</p>
        </div>
    );
};

export default ReviewCard;