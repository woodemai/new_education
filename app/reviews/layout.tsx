import {ReactNode} from "react";
import HeaderReviews from "@/components/HeaderReviews";
export default function Layout({children, modal}: { children: ReactNode, modal: ReactNode }) {
    return (
        <>
            <HeaderReviews/>
            {modal}
            {children}
        </>
    )
}