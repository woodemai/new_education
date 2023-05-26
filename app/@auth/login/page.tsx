'use client';
import styles from '../../modal.module.css'
import Link from "next/link";
import {useRouter} from "next/navigation";

export default function Login() {
    const router = useRouter();
    const goBack = () => {
        router.back()
    }
    return (
        <div className={styles.modal} onClick={goBack}>
            <div className={styles.inner} onClick={event => event.stopPropagation()}>
                <button className={styles.closeBtn} onClick={goBack}>Close</button>
                <div className={styles.links}>
                    <Link href={'/auth/google'}>Login via Google</Link>
                    <Link href={'/auth/github'}>Login via GitHub</Link>
                    <Link href={'/auth/github'}>Login via GitHub</Link>
                </div>
            </div>
        </div>
    )
}