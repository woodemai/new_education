'use client'
import Button from "@/components/Button";
import styles from '../../../../styles/utils.module.css'
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import ReactMarkdown from "react-markdown";
import {Lesson} from "@prisma/client";
import ListLoader from "@/components/loading/reviews/ListLoader";
import {GET} from "@/app/api/lesson/[id]/route";

export default async function LessonPage({params}: { params: { id: string } }) {
    const {id} = params;
    const router = useRouter();
    const [lesson, setLesson] = useState<Lesson | null>();

    useEffect(() => {
        const getLesson = async () => {
            const res = await GET(id).then(res => res.json());
            setLesson(res);
        }
        getLesson()
    }, [id]);
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