'use client'
import {useSession} from "next-auth/react";

export default async function Profile() {
    const session = useSession()
    console.log(session)
    return (<>Profile</>);
}