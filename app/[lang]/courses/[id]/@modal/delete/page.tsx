'use client'
import Modal from "@/components/Modal";
import React, {cache, use} from "react";
import CourseLoad from "@/components/loading/CourseLoad";
import {Course} from "@prisma/client";
import DeleteCourseForm from "@/components/DeleteCourseForm";


const deleteCourseHandle = cache((id: string) =>
    fetch(`/api/course/${id}`, {
        headers: {"Content-Type": "application/json"},
        method: "DELETE",
    }).then((res) => res.json())
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
    if (!course) {
        return (
            <Modal>
                <CourseLoad/>
            </Modal>
        )
    }

    const handleRemove = async () => {
        await deleteCourseHandle(id);
    }
    return (
        <Modal>
            <DeleteCourseForm handleRemove={handleRemove} course={course}/>
        </Modal>
    )
}