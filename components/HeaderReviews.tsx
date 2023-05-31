'use client'
import Link from "next/link";
import styles from '../styles/reviews.module.css'

export default function HeaderReviews() {
    const userId = ''; // todo: userId in header reviews
    return (
        <header className={styles.header}>
                <ul>
                    <li><Link href={'/reviews'}>All reviews</Link></li>
                    <li><Link href={`/reviews/${userId}`}>My reviews</Link></li>
                    <li><Link href={`/reviews/add`}>Add review</Link></li>
                </ul>
        </header>
    )
}