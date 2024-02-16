import { ReactNode } from "react";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionaries";
import Header from "@/components/pages/review/header/Header";

interface Props {
    children: ReactNode,
    params: { lang: Locale }
}

const Layout = async ({ children, params }: Props) => {

    const { reviewsPage } = await getDictionary(params.lang);

    return (
        <>
            <Header dictionary={reviewsPage.header} />
            {children}
        </>
    )
}

export default Layout