import NextAuth from "next-auth";
import YandexProvider from "next-auth/providers/yandex";
import {PrismaAdapter} from "@next-auth/prisma-adapter";
import prisma from "@/lib/prisma";
import {NextApiHandler} from "next";

const authHandler: NextApiHandler = (req, res) =>
    NextAuth(req, res, handler);
export default authHandler;

const handler = {
    adapter: PrismaAdapter(prisma),
    providers: [
        YandexProvider({
            clientId: String(process.env.YANDEX_CLIENT_ID),
            clientSecret: String(process.env.YANDEX_CLIENT_SECRET)
        })
    ],
    secret: process.env.NEXTAUTH_SECRET
}

export {handler as GET, handler as POST}