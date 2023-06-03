import {PrismaAdapter} from "@next-auth/prisma-adapter";
import prisma from "@/lib/prisma";
import YandexProvider from "next-auth/providers/yandex";
import GitHubProvider from "next-auth/providers/github";
import NextAuth from "next-auth";

const handler = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        YandexProvider({
            clientId: String(process.env.YANDEX_CLIENT_ID),
            clientSecret: String(process.env.YANDEX_CLIENT_SECRET),
        }),
        GitHubProvider({
            clientId: String(process.env.GITHUB_ID),
            clientSecret: String(process.env.GITHUB_SECRET),
        })
    ],
})

export {handler as GET, handler as POST}