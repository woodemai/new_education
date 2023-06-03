import {ReactNode} from "react";

export default function Layout(props: { children: ReactNode, modal: ReactNode }) {
    return (
        <>
            {props.children}
            {props.modal}
        </>
    )
}
