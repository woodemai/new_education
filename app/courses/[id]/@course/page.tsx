'use client'
import ReactMarkdown from "react-markdown";
import {useEffect, useState} from "react";
import {CourseProps} from "@/app/courses/page";
import CourseLoad from "@/components/loading/CourseLoad";

export default function Course({params}: { params: { id: string } }) {
    const {id} = params;
    const [course, setCourse] = useState<CourseProps>(
        {id: '', title: '', body: ''}
    );
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
        return <CourseLoad/>
    }
    return (
        <>
            <h2>{course.title}</h2>
            <ReactMarkdown>{course.body}</ReactMarkdown>
        </>
    )
}