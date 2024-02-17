import styles from "@/components/shared/list/list.module.css";
import { Button } from "@/components/shared/button";
import { memo } from "react";

interface Props {
    id: string
    courseId: string,
    deleteText: string,
    back: string
}

const Buttons = memo(function Buttons({ courseId, id, deleteText, back }: Props) {
    return (
        <div className={styles.list}>
            <Button variant="destructive" href={`/lesson/${id}/delete`}>{deleteText}</Button>
            <Button variant="secondary" href={`/courses/${courseId}`}>{back}</Button>
        </div>
    )
})
export default Buttons;