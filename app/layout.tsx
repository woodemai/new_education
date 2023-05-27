import '../styles/globals.css'
import {Inter} from 'next/font/google'
import {ReactNode} from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {Metadata} from "next";
import {Analytics} from '@vercel/analytics/react';
import {NextAuthProvider} from "@/components/NextAuthProvider";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'New Education',
    description: 'Modern, fast, secure',
}

export default function RootLayout({children}: { children: ReactNode }) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <NextAuthProvider>
            <Header/>
            <main>
                {children}
                <Analytics/>
            </main>
            <Footer/>
        </NextAuthProvider>
        </body>
        </html>
    )
}
