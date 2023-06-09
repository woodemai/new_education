'use client'
import Modal from "@/components/modals/Modal";
import Button from "@/components/Button";
import {cache, use} from "react";
import {useRouter} from "next/navigation";
import styles from '../../../../../../styles/utils.module.css'
import CourseLoad from "@/components/loading/CourseLoad";
import {Lesson} from "@prisma/client";

const deleteLesson = cache((id: string) =>
    fetch(`/api/lesson/${id}`, {
        headers: {"Content-Type": "application/json"},
        method: "DELETE",
    }).then((res) => res.json())
);
const getLesson = cache((id: string) =>
    fetch(`/api/lesson/${id}`, {
        headers: {"Content-Type": "application/json"},
        method: "GET"
    }).then((res) => res.json())
);

export default function EditPage({params}: { params: { id: string } }) {
    const {id} = params;
    const lesson = use<Lesson>(getLesson(id));
    const router = useRouter()
    const courseId = lesson?.courseId;
    if (!lesson) {
        return (
            <Modal>
                <CourseLoad/>
            </Modal>
        )
    }

    const handleRemove = async () => {
        await deleteLesson(id);
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