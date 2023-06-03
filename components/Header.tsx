'use client'
import Link from "next/link";
import {signIn, signOut, useSession} from 'next-auth/react'
import Button from "@/components/Button";
import HorizontalNavbar from "@/components/HorizontalNavbar";
import React, {useState} from "react";

export default function Header({dictionary}: {
    dictionary: {
        home: string,
        courses: string,
        reviews: string,
        profile: string,
        settings: string,
        login: string,
        logout: string,
    }
}) {
    const {data: session} = useSession()
    const [showNavbar, setShowNavbar] = useState<boolean>(false);

    const authLink = session
        ? <Button type={'button'} onClick={() => signOut()}>{dictionary.logout}</Button>
        : <Button type={'button'} onClick={() => signIn()}>{dictionary.login}</Button>
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
                        <li><Link href={'/'}>{dictionary.home}</Link></li>
                        <li><Link href={'/courses'}>{dictionary.courses}</Link></li>
                        <li><Link href={'/reviews'}>{dictionary.reviews}</Link></li>
                        <li><Link href={'/profile'}>{dictionary.profile}</Link></li>
                        <li><Link href={'/settings'}>{dictionary.settings}</Link></li>
                        <li>{authLink}</li>
                    </ul>
                </nav>
            </header>
            <HorizontalNavbar showNav={showNavbar}/>
        </>
    )
}