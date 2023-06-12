'use client'
import Modal from "@/components/modals/Modal";
import styles from "@/styles/utils.module.css";
import Button from "@/components/Button";
import {Lesson} from "@prisma/client";
import {useRouter} from "next/navigation";
import {cache} from "react";

const deleteLesson = cache((id: string) =>
    fetch(`/api/lesson/${id}`, {
        headers: {"Content-Type": "application/json"},
        method: "DELETE",
    }).then((res) => res.json())
);
export default function DeleteLessonModal({lesson}: { lesson: Lesson }) {
    const router = useRouter()
    const handleRemove = async () => {
        await deleteLesson(lesson.id);
        router.push(`/courses/${lesson.courseId}`)
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