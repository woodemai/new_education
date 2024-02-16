import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import { ReactNode } from "react";
import { Metadata } from "next";
import { NextAuthProvider } from "@/components/widgets/providers/NextAuthProvider";
import { i18n, Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionaries";
import Footer from "@/components/widgets/Footer";
import { Header } from "@/components/widgets/header";

const inter = Inter({ subsets: ['latin'] })

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({ lang: locale }))
}

export const metadata: Metadata = {
    title: 'New Education',
    description: 'Modern, fast, secure',
    icons: {
        icon: "/icon.ico"
    }
}

interface RootProps {
    children: ReactNode,
    params: { lang: Locale }
}

const RootLayout = async ({ children, params }: RootProps) => {

    const dictionary = await getDictionary(params.lang);

    return (
        <html lang={params.lang}>
            <body className={inter.className}>
                <NextAuthProvider>
                    <Header {...dictionary.header} />
                    <main>
                        {children}
                    </main>
                    <Footer {...dictionary.footer} />
                </NextAuthProvider>
            </body>
        </html>
    )
}
export default RootLayout
