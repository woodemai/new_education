import { ReactNode } from "react";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionaries";
import Header from "@/components/pages/review/header/Header";

interface Props {
    children: ReactNode,
    modal: ReactNode,
    params: { lang: Locale }
}

const Layout = async ({ children, modal, params: { lang } }: Props) => {

    const { reviewsPage } = await getDictionary(lang);

    return (
        <>
            <Header dictionary={reviewsPage.header} />
            {modal}
            {children}
        </>
    )
}

export default Layout