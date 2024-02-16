'use client'
import React, { FC, cache, use } from "react";
import { Course } from "@prisma/client";
import { redirect } from "next/navigation";
import Modal from "@/components/modals/Modal";
import DeleteCourseForm from "@/components/widgets/course/DeleteCourseForm";
import { getCourse } from "@/utils/getCourse";

const deleteCourseHandle = cache((id: string) =>
    fetch(`/api/course/${id}`, {
        method: "DELETE",
    }).then((res) => res.json())
);

interface Props {
    id: string,
    dictionary: {
        warning: string,
        delete: string
    }
}

const DeleteCourseModal: FC<Props> = ({ id, dictionary }) => {
    const course = use<Course>(getCourse(id));

    const handleRemove = async (): Promise<void> => {
        await deleteCourseHandle(id)
            .then(() => redirect('/courses'));

    }
    return (
        <Modal>
            <DeleteCourseForm handleRemove={handleRemove} course={course} dictionary={dictionary} />
        </Modal>
    )
}
export default DeleteCourseModal