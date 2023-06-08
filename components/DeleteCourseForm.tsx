import styles from "@/styles/utils.module.css";
import Button from "@/components/Button";
import {Course} from "@prisma/client";

export default function DeleteCourseForm({handleRemove, course, dictionary}: {
    handleRemove: () => void,
    course: Course,
    dictionary?: { question: string, confirm: string }
}) {
    return (
        <form onSubmit={handleRemove} method={'dialog'} className={styles.container}>
            <h2>Are you sure you want to delete course {course.title}?</h2>
            <Button type={'submit'}>Confirm</Button>
        </form>
    )
}