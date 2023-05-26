import './globals.css'
import {Inter} from 'next/font/google'
import {ReactNode} from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'New Education',
    description: 'Modern, fast, secure',
}

export default function RootLayout({children}: { children: ReactNode }) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Header/>
        <main>
            {children}
        </main>
        <Footer/>
        </body>
        </html>
    )
}
