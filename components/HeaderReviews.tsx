'use client'
import Link from "next/link";
import styles from '../styles/reviews.module.css'

export default function HeaderReviews() {
    return (
        <div className={styles.header}>
            <ul>
                <li><Link href={'/reviews'}>All reviews</Link></li>
                <li><Link href={`/reviews`}>My reviews</Link></li>
                <li><Link href={`/reviews/add`}>Add review</Link></li>
            </ul>
        </div>
    )
}