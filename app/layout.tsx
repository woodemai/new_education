import '../styles/globals.css'
import {Inter} from 'next/font/google'
import {ReactNode} from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {Metadata} from "next";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'New Education',
    description: 'Modern, fast, secure',
}

export default function RootLayout({children, auth}: { children: ReactNode, auth: ReactNode }) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Header/>
        <main>
            {children}
        </main>
        <Footer/>
        {auth}
        </body>
        </html>
    )
}
