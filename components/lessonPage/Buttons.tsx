import styles from "@/styles/utils.module.css";
import Button from "@/components/Button";
import {Lesson} from "@prisma/client";

export default function Buttons({lesson, dictionary}: {
    lesson: Lesson, dictionary: {
        edit: string,
        delete: string,
        back: string,
    }
}) {
    return (
        <div className={styles.list}>
            <Button href={`/lesson/${lesson.id}/edit`}>{dictionary.edit}</Button>
            <Button href={`/lesson/${lesson.id}/delete`}>{dictionary.delete}</Button>
            <Button href={`/courses/${lesson.courseId}`}>{dictionary.back}</Button>
        </div>
    )
}