'use client';
import styles from '../../../styles/modal.module.css'
import Link from "next/link";
import Modal from "@/components/Modal";

export default function Login() {
    return (
        <Modal>
            <div className={styles.links}>
                <Link href={'/auth/google'}>Login via Google</Link>
                <Link href={'/auth/github'}>Login via GitHub</Link>
                <Link href={'/auth/github'}>Login via GitHub</Link>
            </div>
        </Modal>
    )
}