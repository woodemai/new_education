'use client'
import styles from "@/styles/utils.module.css";
import Button from "@/components/Button";
import {signIn, useSession} from "next-auth/react";
import {useRouter} from "next/navigation";

export default function UnAuth({dictionary}: {
    dictionary: {
        heading: string,
        button: string,
    }
}) {
    const session = useSession()
    const router = useRouter()
    if (session.status === 'authenticated') {
        router.back();
        return <></>
    }
    return (
        <div className={styles.centered}>
            <div className={styles.centeredInner}>
                <h2>{dictionary.heading}</h2>
                <Button type={'button'} onClick={() => signIn()}>{dictionary.button}</Button>
            </div>
        </div>
    )
}