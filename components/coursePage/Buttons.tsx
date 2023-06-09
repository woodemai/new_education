'use client'
import styles from "@/styles/utils.module.css";
import Button from "@/components/Button";

export default function Buttons({id, dictionary}: {
    id: string, dictionary: {
        addLesson: string,
        edit: string,
        delete: string,
        back: string
    }
}) {
    return (
        <div className={styles.list}>
            <Button href={`/courses/${id}/add-lesson`}>{dictionary.addLesson}</Button>
            <Button href={`/courses/${id}/edit`}>{dictionary.edit}</Button>
            <Button href={`/courses/${id}/delete`}>{dictionary.delete}</Button>
            <Button href={'/courses'}>{dictionary.back}</Button>
        </div>
    )
}