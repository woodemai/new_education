'use client'
import React, {cache, use} from "react";
import {Course} from "@prisma/client";
import {useRouter} from "next/navigation";
import Modal from "@/components/modals/Modal";
import DeleteCourseForm from "@/components/DeleteCourseForm";

const deleteCourseHandle = cache((id: string) =>
    fetch(`/api/course/${id}`, {
        method: "DELETE",
    }).then((res) => res.json())
);
const getCourse = cache((id: string) =>
    fetch(`/api/course/${id}`, {
        headers: {"Content-Type": "application/json"},
        method: "GET"
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
    const router = useRouter()

    const handleRemove = async (): Promise<void> => {
        await deleteCourseHandle(id);
        router.push('/courses');
    }
    return (
        <Modal>
            <DeleteCourseForm handleRemove={handleRemove} course={course} dictionary={dictionary}/>
        </Modal>
    )
}