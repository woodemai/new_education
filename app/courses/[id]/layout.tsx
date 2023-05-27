import {ReactNode} from "react";

export default function Layout(props: { children: ReactNode, course: ReactNode, modal: ReactNode, lesson: ReactNode }) {
    return (
        <>
            {props.course}
            {props.lesson}
            {props.children}
            {props.modal}
        </>
    )
}
