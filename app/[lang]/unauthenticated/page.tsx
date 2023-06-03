'use client'
import Button from "@/components/Button";
import {signIn} from "next-auth/react";
import styles from '../../../styles/utils.module.css'

export default function UnAuthenticated() {
    return (
        <div className={styles.centered}>
            <div className={styles.centeredInner}>
                <h2>You need to be authenticated to view this page</h2>
                <Button type={'button'} onClick={() => signIn()}>Login</Button>
            </div>
        </div>
    )
}