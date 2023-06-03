'use client'
import ReactMarkdown from "react-markdown";
import {useEffect, useState} from "react";
import HeadingLoad from "@/components/loading/HeadingLoad";
import Heading2Load from "@/components/loading/Heading2Load";
import {Course} from "@prisma/client";

export default function CoursePage({params}: { params: { id: string } }) {
    const {id} = params;
    const [course, setCourse] = useState<Course>({id: '', title: '', body: '', published: false});
    useEffect(() => {
        const getCourse = async () => {
            const response = await fetch(`/api/course/${id}`, {
                method: "GET"
            });
            if (!response.ok) {
                console.error(`Failed to fetch post ${id}`);
                return;
            }
            const data = await response.json();
            setCourse(data);
        }
        if (id) {
            getCourse()
        }
    }, [id]);
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