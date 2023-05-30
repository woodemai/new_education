import {PrismaAdapter} from "@next-auth/prisma-adapter";
import prisma from "@/lib/prisma";
import YandexProvider from "next-auth/providers/yandex";
import NextAuth from "next-auth";

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        YandexProvider({
            clientId: String(process.env.YANDEX_CLIENT_ID),
            clientSecret: String(process.env.YANDEX_CLIENT_SECRET),
        })
    ],
}
const handler = NextAuth(authOptions)
export {handler as GET, handler as POST}