import '../../styles/globals.css'
import {Inter} from 'next/font/google'
import {ReactNode} from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {Metadata} from "next";
import {Analytics} from '@vercel/analytics/react';
import {NextAuthProvider} from "@/components/NextAuthProvider";
import {i18n, Locale} from "@/i18n-config";
import {getDictionary} from "@/get-dictionaries";

const inter = Inter({subsets: ['latin']})

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({lang: locale}))
}

export const metadata: Metadata = {
    title: 'New Education',
    description: 'Modern, fast, secure',
    icons: {
        icon: "/icon.ico"
    }
}

export default async function RootLayout({
                                             children, params: {lang}
                                         }: {
    children: ReactNode,
    params: { lang: Locale }
}) {
    const dictionary = await getDictionary(lang);
    return (
        <html lang={lang}>
        <body className={inter.className}>
        <NextAuthProvider>
            <Header dictionary={dictionary.header}/>
            <main>
                {children}
                <Analytics/>
            </main>
            <Footer dictionary={dictionary.footer}/>
        </NextAuthProvider>
        </body>
        </html>
    )
}
