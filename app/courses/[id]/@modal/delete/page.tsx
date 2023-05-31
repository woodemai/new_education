'use client'
import Modal from "@/components/Modal";
import Button from "@/components/Button";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import styles from '../../../../../styles/utils.module.css'
import CourseLoad from "@/components/loading/CourseLoad";
import {Course} from "@prisma/client";

export default function EditPage({params}: { params: { id: string } }) {
    const {id} = params;
    const [course, setCourse] = useState<Course | null>();
    const router = useRouter()
    useEffect(() => {
        const getData = async () => {
            const response = await fetch(`/api/course/${id}`, {
                method: "GET"
            });
            if (!response.ok) {
                console.error(`Failed to fetch course with ID: ${id}`);
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
            <Modal>
                <CourseLoad/>
            </Modal>
        )
    }

    const handleRemove = async () => {
        await fetch(`/api/course/${id}`, {
            method: "DELETE"
        });
        router.refresh()
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