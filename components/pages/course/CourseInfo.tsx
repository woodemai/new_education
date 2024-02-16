import { memo } from "react";

interface InfoProps {
    title: string,
    body: string
}

const CourseInfo = memo(function Info({ title, body }: InfoProps) {

    return (
        <>
            <h2>{title}</h2>
            <p>{body}</p>
        </>
    )
})
export default CourseInfo