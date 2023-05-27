import {ReactNode} from "react";

export default function Layout(props: { children: ReactNode, api:ReactNode}) {
    return (
        <>
            {props.children}
            {props.api}
        </>
    )
}
