'use client'
import styles from "@/styles/utils.module.css";
import Button from "@/components/Button";
import {useRouter} from "next/navigation";

export default function Buttons({id, dictionary}: {
    id: string, dictionary: {
        addLesson: string,
        edit: string,
        delete: string,
        back: string
    }
}) {
    const router = useRouter()
    return (
        <div className={styles.list}>
            <Button onClick={() => router.push(`/courses/${id}/add-lesson`)}>{dictionary.addLesson}</Button>
            <Button onClick={() => router.push(`/courses/${id}/edit`)}>{dictionary.edit}</Button>
            <Button onClick={() => router.push(`/courses/${id}/delete`)}>{dictionary.delete}</Button>
            <Button onClick={() => router.push('/courses')}>{dictionary.back}</Button>
        </div>
    )
}