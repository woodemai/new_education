import styles from "@/styles/utils.module.css";
import Button from "@/components/Button";
import {Course} from "@prisma/client";

export default function DeleteCourseForm({handleRemove, course, dictionary}: {
    handleRemove: () => void,
    course: Course,
    dictionary: { warning: string, delete: string }
}) {
    return (
        <form onSubmit={handleRemove} method="post" className={styles.container}>
            <h2>{dictionary.warning} {course.title}?</h2>
            <Button type="submit">{dictionary.delete}</Button>
        </form>
    )
}