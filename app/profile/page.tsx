'use client'
import {signIn, useSession} from "next-auth/react";
import Image from "next/image";
import Button from "@/components/Button";

export default async function Profile() {
    const {data: session} = useSession()
    if (!session) {
        return (
            <>
                <h1>You need to be authenticated to view this page</h1>
                <Button type={'button'} onClick={() => signIn()}>Login</Button>
            </>
        )
    }
    return (
        <>
            <h1>{session?.user?.name}</h1>
            <span>Email</span>
            <p>{session?.user?.email}</p>
            <Image src={String(session?.user?.image)} alt={'avatar'} width={200} height={200}/>
        </>
    );
}