import {PrismaAdapter} from "@next-auth/prisma-adapter";
import prisma from "@/lib/prisma";
import YandexProvider from "next-auth/providers/yandex";
import NextAuth from "next-auth";

const handler = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        YandexProvider({
            clientId: String(process.env.YANDEX_CLIENT_ID),
            clientSecret: String(process.env.YANDEX_CLIENT_SECRET),
        })
    ],
    callbacks: {
        redirect({baseUrl}) {
            return baseUrl
        }

    },
})
export {handler as GET, handler as POST}