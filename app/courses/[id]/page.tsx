'use client'
import Button from "@/components/Button";
import styles from '../../../styles/utils.module.css'
import {useRouter} from "next/navigation";

export default function CoursePage({params}: { params: { id: string } }) {
    const {id} = params;
    const router = useRouter()
    return (
        <>
            <div className={styles.list}>
                <Button onClick={() => router.push(`/courses/${id}/add-lesson`)}>Add lesson</Button>
            </div>
            <div className={styles.list}>
                <Button onClick={() => router.push(`/courses/${id}/edit`)}>Edit</Button>
                <Button onClick={() => router.push(`/courses/${id}/delete`)}>Delete</Button>
                <Button onClick={() => router.push('/courses')}>Go back</Button>
            </div>
        </>
    )
}