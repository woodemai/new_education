'use client'
import {cache, use} from "react";
import {Course} from "@prisma/client";
import ReactMarkdown from "react-markdown";

const getCourse = cache((id: string) =>
    fetch(`/api/course/${id}`, {
        headers: {"Content-Type": "application/json"},
        method: "GET"
    }).then((res) => res.json())
);
export default function CourseInfo({id}: { id: string }) {
    const course: Course = use<Course>(getCourse(id));
    return (
        <>
            <h2>{course.title}</h2>
            <ReactMarkdown>{course.body}</ReactMarkdown>
        </>
    )
}