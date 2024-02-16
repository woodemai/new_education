'use client'
import { signIn, signOut, useSession } from 'next-auth/react'
import { Button } from "@/components/shared/button";
import { useState } from "react";
import HorizontalNavbar from "./HorizontalNavbar";
import Link from "next/link";



const Header = ({ dictionary }: {
    dictionary: {
        home: string,
        courses: string,
        reviews: string,
        profile: string,
        settings: string,
        login: string,
        logout: string,
    }
}) => {

    const { data: session } = useSession()
    const [showNavbar, setShowNavbar] = useState<boolean>(false);

    const authLink = session
        ? <Button type={'button'} onClick={() => signOut()}>{dictionary.logout}</Button>
        : <Button type={'button'} onClick={() => signIn()}>{dictionary.login}</Button>
        
    return (
        <>
            <header>
                <h1>new education</h1>
                <button className='menu' onClick={() => setShowNavbar(!showNavbar)}>
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
                <nav className='horizontalNav'>
                    <ul>
                        <li><Link href={'/'}>{dictionary.home}</Link></li>
                        <li><Link href={'/courses'}>{dictionary.courses}</Link></li>
                        <li><Link href={'/reviews'}>{dictionary.reviews}</Link></li>
                        <li><Link href={'/profile'}>{dictionary.profile}</Link></li>
                        <li>{authLink}</li>
                    </ul>
                </nav>
            </header>
            <HorizontalNavbar showNav={showNavbar} />
        </>
    )
}
export default Header;