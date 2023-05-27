'use client'
import Link from "next/link";
import {useSession} from 'next-auth/react'

export default function Header() {
    const {data: session} = useSession()
    console.log(session)
    const authLink = session
        ? <Link href="/api/auth/signout"> Logout </Link>
        : <Link href="/api/auth/signin"> Login </Link>

    return (
        <header>
            <nav>
                <h1>new education</h1>
                <ul>
                    <li><Link href={'/'}>Home</Link></li>
                    <li><Link href={'/courses'}>Courses</Link></li>
                    <li><Link href={'/profile'}>Profile</Link></li>
                    <li><Link href={'/courses'}>Settings</Link></li>
                    <li>{authLink}</li>
                </ul>
            </nav>
        </header>
    )
}