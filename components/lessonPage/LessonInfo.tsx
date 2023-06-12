import {Lesson} from "@prisma/client";
import ReactMarkdown from "react-markdown";

export default function LessonInfo({lesson}: { lesson: Lesson }) {
    return (
        <>
            <h2>{lesson.title}</h2>
            <ReactMarkdown>{lesson.body}</ReactMarkdown>
        </>
    )
}