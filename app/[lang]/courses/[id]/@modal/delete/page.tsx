'use client'
import Modal from "@/components/Modal";
import Button from "@/components/Button";
import {cache, use} from "react";
import {useRouter} from "next/navigation";
import styles from '../../../../../../styles/utils.module.css'
import CourseLoad from "@/components/loading/CourseLoad";
import {Course} from "@prisma/client";

const deleteCourse = cache((id: string) =>
    fetch(`/api/course/${id}`, {
        headers: {"Content-Type": "application/json"},
        method: "DELETE",
    }).then((res) => res.json())
);
const getCourse = cache((id: string) =>
    fetch(`/api/course/${id}`, {
        headers: {"Content-Type": "application/json"},
        method: "GET"
    }).then((res) => res.json())
);

export default function EditPage({params}: { params: { id: string } }) {
    const {id} = params;
    const course = use<Course>(getCourse(id));
    const router = useRouter()
    if (!course) {
        return (
            <Modal>
                <CourseLoad/>
            </Modal>
        )
    }

    const handleRemove = async () => {
        await deleteCourse(id);
        router.push('/courses')
    }
    return (
        <Modal>
            <form onSubmit={handleRemove} method={'post'} className={styles.container}>
                <h2>Are you sure you want to delete course {course.title}?</h2>
                <Button type={'submit'}>Confirm</Button>
            </form>
        </Modal>
    )
}