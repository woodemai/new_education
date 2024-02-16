import { ReactNode } from "react";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionaries";
import Header from "@/components/pages/review/header/Header";

interface Props {
    children: ReactNode,
    params: { lang: Locale }
}

<<<<<<< HEAD
const Layout = async ({ children, params }: Props) => {

    const { reviewsPage } = await getDictionary(params.lang);
=======
const Layout = async ({ children, modal, params: { lang } }: Props) => {

    const { reviewsPage } = await getDictionary(lang);
>>>>>>> main

    return (
        <>
            <Header dictionary={reviewsPage.header} />
<<<<<<< HEAD
=======
            {modal}
>>>>>>> main
            {children}
        </>
    )
}

export default Layout