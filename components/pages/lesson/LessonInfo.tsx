import { memo } from "react";

interface Props {
    title: string,
    body: string
}

const LessonInfo = memo(function Info({ title, body }: Props) {
    return (
        <>
            <h2>{title}</h2>
            <p>{body}</p>
        </>
    )
})
export default LessonInfo