'use client'
import Link from "next/link";
import styles from './header.module.css'
import { memo } from "react";

interface Props {
        allReviews: string,
        myReviews: string,
        addReview: string,
}

const Header = memo(function Header({ allReviews, myReviews, addReview }: Props) {
    return (
        <div className={styles.header}>
            <ul>
                <li><Link href={'/reviews'}>{allReviews}</Link></li>
                <li><Link href={`/reviews`}>{myReviews}</Link></li>
                <li><Link href={`/reviews/create`}>{addReview}</Link></li>
            </ul>
        </div>
    )
})
export default Header