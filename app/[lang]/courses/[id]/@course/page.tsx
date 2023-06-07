'use client'
import ReactMarkdown from "react-markdown";
import HeadingLoad from "@/components/loading/HeadingLoad";
import Heading2Load from "@/components/loading/Heading2Load";
import {Course} from "@prisma/client";
import {cache, use} from 'react';


const getCourse = cache((id: string) =>
    fetch(`${process.env.BASE_URL}/api/course/${id}`, {
        headers: {"Content-Type": "application/json"},
        method: "GET"
    }).then((res) => res.json())
);
export default function CoursePage({params}: { params: { id: string } }) {
    const {id} = params;
    const course = use<Course>(getCourse(id));
    if (!course) {
        return (
            <>
                <HeadingLoad/>
                <Heading2Load/>
            </>
        )
    } else {
        return (
            <>
                <h2>{course.title}</h2>
                <ReactMarkdown>{course.body}</ReactMarkdown>
            </>
        )
    }
}