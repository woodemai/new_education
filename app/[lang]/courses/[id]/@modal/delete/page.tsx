'use client'
import Modal from "@/components/Modal";
import React, {cache, use} from "react";
import CourseLoad from "@/components/loading/CourseLoad";
import {Course} from "@prisma/client";
import DeleteCourseForm from "@/components/DeleteCourseForm";
import {useRouter} from "next/navigation";


const deleteCourseHandle = cache((id: string) =>
    fetch(`/api/course/${id}`, {
        method: "DELETE",
    })
);
const getCourse = cache((id: string) =>
    fetch(`/api/course/${id}`, {
        headers: {"Content-Type": "application/json"},
        method: "GET"
    }).then((res) => res.json())
);

export default function EditPage({params}: { params: { id: string } }) {
    const {id} = params;
    const course = use<Course>(getCourse(id));
    const router = useRouter()
    if (!course) {
        return (
            <Modal>
                <CourseLoad/>
            </Modal>
        )
    }

    const handleRemove = async () => {
        await deleteCourseHandle(id);
        router.push('/courses');
    }
    return (
        <Modal>
            <DeleteCourseForm handleRemove={handleRemove} course={course}/>
        </Modal>
    )
}