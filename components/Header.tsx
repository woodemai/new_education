'use client'
import Link from "next/link";
import {signIn, signOut, useSession} from 'next-auth/react'
import Button from "@/components/Button";
import HorizontalNavbar from "@/components/HorizontalNavbar";
import React, {useState} from "react";

export default function Header() {
    const {data: session} = useSession()
    const [showNavbar, setShowNavbar] = useState<boolean>(false);

    const authLink = session
        ? <Button type={'button'} onClick={() => signOut()}>Logout</Button>
        : <Button type={'button'} onClick={() => signIn()}>Login</Button>
    return (
        <>
            <header>
                <h1>new education</h1>
                <div className='menu' onClick={() => setShowNavbar(!showNavbar)}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <nav className='horizontalNav'>
                    <ul>
                        <li><Link href={'/'}>Home</Link></li>
                        <li><Link href={'/courses'}>Courses</Link></li>
                        <li><Link href={'/reviews'}>Reviews</Link></li>
                        <li><Link href={'/profile'}>Profile</Link></li>
                        <li><Link href={'/settings'}>Settings</Link></li>
                        <li>{authLink}</li>
                    </ul>
                </nav>
            </header>
            <HorizontalNavbar showNav={showNavbar}/>
        </>
    )
}