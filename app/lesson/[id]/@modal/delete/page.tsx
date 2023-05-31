'use client'
import Modal from "@/components/Modal";
import Button from "@/components/Button";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import styles from '../../../../../styles/utils.module.css'
import CourseLoad from "@/components/loading/CourseLoad";
import {Lesson} from "@prisma/client";

export default function EditPage({params}: { params: { id: string } }) {
    const {id} = params;
    const [lesson, setLesson] = useState<Lesson | null>();
    const router = useRouter()
    const courseId = lesson?.courseId;
    useEffect(() => {
        const getData = async () => {
            const response = await fetch(`/api/lesson/${id}`, {
                method: "GET"
            });
            if (!response.ok) {
                console.error(`Failed to fetch lesson with ID: ${id}`);
                return;
            }
            const data = await response.json();
            setLesson(data);
        }
        if (id) {
            getData()
        }
    }, [id]);
    if (!lesson) {
        return (
            <Modal>
                <CourseLoad/>
            </Modal>
        )
    }

    const handleRemove = async () => {
        await fetch(`/api/lesson/${id}`, {
            method: "DELETE"
        });
        router.refresh()
        router.push(`/courses/${courseId}`)
    }
    return (
        <Modal>
            <form onSubmit={handleRemove} method={'delete'} className={styles.container}>
                <h2>Are you sure you want to delete course: {lesson.title}?</h2>
                <Button type={'submit'}>Confirm</Button>
            </form>
        </Modal>
    )
}