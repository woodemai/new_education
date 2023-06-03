import {PrismaAdapter} from "@next-auth/prisma-adapter";
import prisma from "@/lib/prisma";
import YandexProvider from "next-auth/providers/yandex";
import GitHubProvider from "next-auth/providers/github";
import NextAuth from "next-auth";

const handler = NextAuth({
    theme: {
        brandColor: "#fff",
        colorScheme: 'light',
        logo: "/icon.png",
    },
    adapter: PrismaAdapter(prisma),
    providers: [
        YandexProvider({
            clientId: String(process.env.YANDEX_CLIENT_ID),
            clientSecret: String(process.env.YANDEX_CLIENT_SECRET),
            style: {
                logo: "/yandex.svg",
                logoDark: "/yandex.svg",
                bg: "#fff",
                text: "#000",
                bgDark: "#fff",
                textDark: "#000",
            },
        }),
        GitHubProvider({
            clientId: String(process.env.GITHUB_ID),
            clientSecret: String(process.env.GITHUB_SECRET),
        })
    ],
    session: {
        updateAge: 60 * 60,
    },
    pages: {
        signIn: "/signin",
        signOut: "signout"
    }
})

export {handler as GET, handler as POST}