'use client'
import Link from "next/link";
import styles from '../styles/reviews.module.css'

export default function HeaderReviews({dictionary}: {
    dictionary: {
        allReviews: string,
        myReviews: string,
        addReview: string,
    }
}) {
    return (
        <div className={styles.header}>
            <ul>
                <li><Link href={'/reviews'}>{dictionary.allReviews}</Link></li>
                <li><Link href={`/reviews`}>{dictionary.myReviews}</Link></li>
                <li><Link href={`/reviews/add`}>{dictionary.addReview}</Link></li>
            </ul>
        </div>
    )
}