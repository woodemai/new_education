import {ReactNode} from "react";

export default function Layout({children, api}: { children: ReactNode, api:ReactNode}) {
    return (
        <>
            {children}
            {api}
        </>
    )
}
