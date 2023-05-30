'use client'
import {signIn, useSession} from "next-auth/react";
import Image from "next/image";
import Button from "@/components/Button";

export default async function Profile() {
    const session = useSession()
    if (session.status === 'loading') {
        return (
            <>
                <h1>Loading...</h1>
            </>
        )
    }
    if (session.status === 'unauthenticated') {
        return (
            <>
                <h1>You need to be authenticated to view this page</h1>
                <Button type={'button'} onClick={() => signIn()}>Login</Button>
            </>
        )
    }
    return (
        <>
            <h1>{session.data?.user?.name}</h1>
            <span>Email</span>
            <p>{session.data?.user?.email}</p>
            <Image src={String(session.data?.user?.image)} alt={'avatar'} width={200} height={200}
                   loading="lazy" placeholder={"blur"}
            />
        </>
    );
}