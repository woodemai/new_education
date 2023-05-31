"use client";
import Link from "next/link";
import {signIn, signOut, useSession} from "next-auth/react";
import Button from "@/components/Button";
import {useEffect, useState} from "react";

export default function HorizontalNavbar({showNav}: { showNav: boolean }) {
    const [showNavbar, setShowNavbar] = useState<boolean>(showNav);
    useEffect(() => {
        setShowNavbar(showNav)
    }, [showNav]);
    const {data: session} = useSession();
    const authLink = session
        ? <Button type={"button"} onClick={() => signOut()}>Logout</Button>
        : <Button type={"button"} onClick={() => signIn()}>Login</Button>;
    if (!showNavbar) {
        return <></>;
    }
    return (
        <nav className="verticalNav">
            <ul>
                <li><Link href={"/"}>Home</Link></li>
                <li><Link onClick={() => setShowNavbar(!showNavbar)} href={"/courses"}>Courses</Link></li>
                <li><Link onClick={() => setShowNavbar(!showNavbar)} href={"/reviews"}>Reviews</Link></li>
                <li><Link onClick={() => setShowNavbar(!showNavbar)} href={"/profile"}>Profile</Link></li>
                <li><Link onClick={() => setShowNavbar(!showNavbar)} href={"/settings"}>Settings</Link></li>
                <li>{authLink}</li>
            </ul>
        </nav>
    );
}