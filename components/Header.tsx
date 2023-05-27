'use client'
import Link from "next/link";
import {signIn} from 'next-auth/react'
import Button from "@/components/Button";

export default function Header() {
    return (
        <header>
            <nav>
                <h1>new education</h1>
                <ul>
                    <li><Link href={'/'}>Home</Link></li>
                    <li><Link href={'/courses'}>Courses</Link></li>
                    <li><Link href={'/profile'}>Profile</Link></li>
                    <li><Link href={'/courses'}>Settings</Link></li>
                    <li><Button onClick={() => signIn()}>Sign In</Button></li>
                </ul>
            </nav>
        </header>
    )
}