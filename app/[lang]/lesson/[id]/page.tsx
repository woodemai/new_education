'use client'
import Button from "@/components/Button";
import styles from '../../../../styles/utils.module.css'
import {useRouter} from "next/navigation";
import {cache, use} from "react";
import ReactMarkdown from "react-markdown";
import {Lesson} from "@prisma/client";
import ListLoader from "@/components/loading/reviews/ListLoader";

const getLesson = cache((id: string) =>
    fetch(`/api/lesson/${id}`, {
        headers: {"Content-Type": "application/json"},
        method: "GET"
    }).then((res) => res.json())
);
export default async function LessonPage({params}: { params: { id: string } }) {
    const {id} = params;
    const router = useRouter();
    const lesson = use<Lesson>(getLesson(id));
    return (lesson)
        ? (
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
        : <ListLoader/>
}