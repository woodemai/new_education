import styles from "@/components/shared/list/list.module.css";
import { Button } from "@/components/shared/button";
import { Lesson } from "@prisma/client";

export default function Buttons({ lesson, dictionary }: {
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