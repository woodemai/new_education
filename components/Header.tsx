'use client'
import Link from "next/link";
import {signIn, signOut, useSession} from 'next-auth/react'
import Button from "@/components/Button";

export default function Header() {
    const {data: session} = useSession()
    const authLink = session
        ? <Button type={'button'} onClick={() => signOut()}>Logout</Button>
        : <Button type={'button'} onClick={() => signIn()}>Login</Button>

    return (
        <header>
            <nav>
                <h1>new education</h1>
                <ul>
                    <li><Link href={'/'}>Home</Link></li>
                    <li><Link href={'/courses'}>Courses</Link></li>
                    <li><Link href={'/reviews'}>Reviews</Link></li>
                    <li><Link href={'/profile'}>Profile</Link></li>
                    <li><Link href={'/courses'}>Settings</Link></li>
                    <li>{authLink}</li>
                </ul>
            </nav>
        </header>
    )
}