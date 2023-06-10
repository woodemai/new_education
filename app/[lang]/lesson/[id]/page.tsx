'use client'
import Button from "@/components/Button";
import styles from '../../../../styles/utils.module.css'
import {useRouter} from "next/navigation";
import {use} from "react";
import ReactMarkdown from "react-markdown";
import {Lesson} from "@prisma/client";
import ListLoader from "@/components/loading/reviews/ListLoader";
import {getLesson} from "@/utils/getLesson";


export default function LessonPage({params}: { params: { id: string } }) {
    const {id} = params;
    const router = useRouter();
    const lesson = use<Lesson>(getLesson(id));
    return lesson
        ? (
            <>
                <h2>{lesson.title}</h2>
                <ReactMarkdown>{lesson.body}</ReactMarkdown>
                <div className={styles.list}>
                    <Button onClick={() => router.push(`/lesson/${id}/edit`)}>Edit</Button>
                    <Button onClick={() => router.push(`/lesson/${id}/delete`)}>Delete</Button>
                    <Button onClick={() => router.push(`/courses/${lesson.courseId}`)}>Go back</Button>
                </div>
            </>
        )
        : <ListLoader/>
}