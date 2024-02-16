'use client'
import Link from "next/link";
import styles from './header.module.css'

interface Props {
    dictionary: {
        allReviews: string,
        myReviews: string,
        addReview: string,
    }
}

const Header = ({ dictionary }: Props) => {
    return (
        <div className={styles.header}>
            <ul>
                <li><Link href={'/reviews'}>{dictionary.allReviews}</Link></li>
                <li><Link href={`/reviews`}>{dictionary.myReviews}</Link></li>
                <li><Link href={`/reviews/create`}>{dictionary.addReview}</Link></li>
            </ul>
        </div>
    )
}
export default Header