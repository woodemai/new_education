import {cache, use} from "react";
import {Course} from "@prisma/client";
import HeadingLoad from "@/components/loading/HeadingLoad";
import Heading2Load from "@/components/loading/Heading2Load";
import ReactMarkdown from "react-markdown";

const getCourse = cache((id: string) =>
    fetch(`/api/course/${id}`, {
        headers: {"Content-Type": "application/json"},
        method: "GET"
    }).then((res) => res.json())
);
export default function CourseInfo({id}: { id: string }) {
    const course = use<Course>(getCourse(id));
    if (!course) {
        return (
            <>
                <HeadingLoad/>
                <Heading2Load/>
            </>
        )
    }
    return (
        <>
            <h2>{course.title}</h2>
            <ReactMarkdown>{course.body}</ReactMarkdown>
        </>
    )
}