import {Course} from "@prisma/client";
import ReactMarkdown from "react-markdown";


export default function CourseInfo({course}: { course: Course }) {
    return (
        <>
            <h2>{course.title}</h2>
            <ReactMarkdown>{course.body}</ReactMarkdown>
        </>
    )
}