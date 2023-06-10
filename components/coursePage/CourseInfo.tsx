'use client'
import {use} from "react";
import {Course} from "@prisma/client";
import ReactMarkdown from "react-markdown";
import {getCourse} from "@/utils/getCourse";


export default function CourseInfo({id}: { id: string }) {
    const course: Course = use<Course>(getCourse(id));
    return (
        <>
            <h2>{course.title}</h2>
            <ReactMarkdown>{course.body}</ReactMarkdown>
        </>
    )
}