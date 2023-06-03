'use client'
import styles from "@/styles/utils.module.css";
import Button from "@/components/Button";
import {signIn} from "next-auth/react";

export default function UnAuth({dictionary}: {
    dictionary: {
        heading: string,
        button: string,
    }
}) {
    return (
        <div className={styles.centered}>
            <div className={styles.centeredInner}>
                <h2>{dictionary.heading}</h2>
                <Button type={'button'} onClick={() => signIn()}>{dictionary.button}</Button>
            </div>
        </div>
    )
}