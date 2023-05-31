'use client'
import Link from "next/link";
import {signIn, signOut, useSession} from "next-auth/react";
import Button from "@/components/Button";

export default function HorizontalNavbar({showNavbar} : {showNavbar: boolean}) {
    const {data: session} = useSession()
    const authLink = session
        ? <Button type={'button'} onClick={() => signOut()}>Logout</Button>
        : <Button type={'button'} onClick={() => signIn()}>Login</Button>
    if (!showNavbar) {
        return <></>
    }
    return (
        <nav className='verticalNav'>
            <ul>
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/courses'}>Courses</Link></li>
                <li><Link href={'/reviews'}>Reviews</Link></li>
                <li><Link href={'/profile'}>Profile</Link></li>
                <li><Link href={'/settings'}>Settings</Link></li>
                <li>{authLink}</li>
            </ul>
        </nav>
    )
}