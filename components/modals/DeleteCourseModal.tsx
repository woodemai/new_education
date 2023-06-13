'use client'
import React, {cache, use} from "react";
import {Course} from "@prisma/client";
import {redirect} from "next/navigation";
import Modal from "@/components/modals/Modal";
import DeleteCourseForm from "@/components/DeleteCourseForm";
import {getCourse} from "@/utils/getCourse";

const deleteCourseHandle = cache((id: string) =>
    fetch(`/api/course/${id}`, {
        method: "DELETE",
    }).then((res) => res.json())
);
export default function DeleteCourseModal({id, dictionary}: {
    id: string,
    dictionary: {
        warning: string,
        delete: string
    }
}) {
    const course = use<Course>(getCourse(id));

    const handleRemove = async (): Promise<void> => {
        await deleteCourseHandle(id);
        redirect('/courses')
    }
    return (
        <Modal>
            <DeleteCourseForm handleRemove={handleRemove} course={course} dictionary={dictionary}/>
        </Modal>
    )
}