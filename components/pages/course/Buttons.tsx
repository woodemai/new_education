'use client'
import styles from "@/components/shared/list/list.module.css";
import { Button } from "@/components/shared/button";
import DeleteCourseModal from "../../modals/DeleteCourseModal";
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
            <Button href={`/courses/${id}/add-lesson`}>{dictionary.addLesson}</Button>
            <Button href={`/courses/${id}/edit`}>{dictionary.edit}</Button>
            <DeleteCourseModal id={id} dictionary={{ warning: "asd", delete: 'sd' }} />
            <Button href={`/courses/${id}/delete`}>{dictionary.delete}</Button>
            <Button href={'/courses'}>{dictionary.back}</Button>
        </div>
    )
}
export default Buttons;