'use client'
import Modal from "@/components/Modal";
import Button from "@/components/Button";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import styles from '../../../../../styles/utils.module.css'
import {CourseProps} from "@/lib/interfaces";

export default function EditPage({params}: { params: { id: string } }) {
    const {id} = params;
    const [course, setCourse] = useState<CourseProps | null>();
    const router = useRouter()
    useEffect(() => {
        const getData = async () => {
            const response = await fetch(`/api/course/${id}`, {
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
        await fetch(`/api/course/${id}`, {
            method: "DELETE"
        });
        router.refresh()
        await router.push('/courses')
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