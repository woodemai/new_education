'use client'
import styles from "@/components/shared/list/list.module.css";
import { Button } from "@/components/shared/button";
import { FC } from "react";

interface Props {
    id: string, dictionary: {
        addLesson: string,
        edit: string,
        delete: string,
        back: string
    }
}

const Buttons: FC<Props> = ({ id, dictionary }) => {
    return (
        <div className={styles.list}>
            <Button href={`/courses/${id}/create-lesson`}>{dictionary.addLesson}</Button>
            <Button href={`/courses/${id}/edit`}>{dictionary.edit}</Button>
            <Button variant="destructive" href={`/courses/${id}/delete`}>{dictionary.delete}</Button>
            <Button variant="secondary" href={'/courses'}>{dictionary.back}</Button>
        </div>
    )
}
export default Buttons;