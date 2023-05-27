'use client'
import {CourseProps} from "@/app/courses/page";
import ReactMarkdown from "react-markdown";
import {useEffect, useState} from "react";
import Button from "@/components/Button";
import styles from '../../../styles/utils.module.css'
import {useRouter} from "next/navigation";

async function generateStaticProps(): Promise<void[]> {
    const courses = await fetch(`/api/courses`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }).then((res) => res.json()).then((res: CourseProps[]) => res);
    return courses.map((course) => {
        course.id
    });
}

export default function CoursePage({params}: { params: { id: string } }) {
    const {id} = params;
    const [course, setCourse] = useState<CourseProps | null>();
    const router = useRouter()
    useEffect(() => {
        const getData = async () => {
            const response = await fetch(`/api/${id}`, {
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
            getData()
        }
    }, [id]);
    if (!course) {
        return (
            <>
                <h1>Loading...</h1>
            </>
        )
    }
    const handleRemove = async () => {
        await fetch(`/api/${id}`, {
            method: "DELETE"
        });
        router.refresh()
        await router.push('/courses')
    }
    return (
        <>
            <h2>{course.title}</h2>
            <ReactMarkdown>{course.body}</ReactMarkdown>
            <div className={styles.list}>
                <Button>Edit</Button>
                <Button onClick={handleRemove}>Delete</Button>
            </div>
        </>
    )
}