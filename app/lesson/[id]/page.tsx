'use client'
import Button from "@/components/Button";
import styles from '../../../styles/utils.module.css'
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import ReactMarkdown from "react-markdown";
import {Lesson} from "@prisma/client";
import Heading2Load from "@/components/loading/Heading2Load";
import HeadingLoad from "@/components/loading/HeadingLoad";
import ButtonLoad from "@/components/loading/ButtonLoad";

export default function LessonPage({params}: { params: { id: string } }) {
    const {id} = params;
    const router = useRouter()
    const [lesson, setLesson] = useState<Lesson>(
        {id: '', title: '', body: '', courseId: ''}
    );
    useEffect(() => {
        const getLesson = async () => {
            const response = await fetch(`/api/lesson/${id}`, {
                method: "GET"
            });
            if (!response.ok) {
                console.error(`Failed to fetch lesson ${id}`);
                return;
            }
            const data = await response.json();
            setLesson(data);
        }
        if (id) {
            getLesson()
        }
    }, [id]);
    if (!lesson || !lesson.title || !lesson.body) {
        return (
            <>
                <HeadingLoad/>
                <Heading2Load/>
                <ButtonLoad/>
                <ButtonLoad/>
                <ButtonLoad/>
            </>
        )
    }
    return (
        <>
            <h2>{lesson.title}</h2>
            <ReactMarkdown>{lesson.body}</ReactMarkdown>
            <div className={styles.list}>
                <Button onClick={() => router.push(`/lesson/${id}/edit`)}>Edit</Button>
                <Button onClick={() => router.push(`/lesson/${id}/delete`)}>Delete</Button>
                <Button onClick={() => router.push(`/lesson/${lesson.courseId}`)}>Go back</Button>
            </div>
        </>
    )
}