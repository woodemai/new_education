import {ReactNode} from "react";
import HeaderReviews from "@/components/HeaderReviews";
import {Locale} from "@/i18n-config";
import {getDictionary} from "@/get-dictionaries";

export default async function Layout({children, modal, params: {lang}}: {
    children: ReactNode,
    modal: ReactNode,
    params: { lang: Locale }
}) {
    const {reviewsPage} = await getDictionary(lang);
    return (
        <>
            <HeaderReviews dictionary={reviewsPage.header}/>
            {modal}
            {children}
        </>
    )
}