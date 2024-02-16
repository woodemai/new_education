'use client'
import styles from "@/styles/utils.module.css";
import { Button } from "@/components/shared/button";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

interface Props {
    dictionary: {
        heading: string,
        button: string,
    }
}

const UnAuth = ({ dictionary }: Props) => {

    const { status } = useSession()
    const router = useRouter()

    if (status === 'authenticated') {
        router.push('/');
        return <Button href={'/profile'}>Profile</Button>
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
export default UnAuth