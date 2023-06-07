'use client'
import Modal from "@/components/Modal";
import Input from "@/components/InputC";
import Button from "@/components/Button";
import {cache, use, useState} from "react";
import {useRouter} from "next/navigation";
import CourseLoad from "@/components/loading/CourseLoad";
import {Course} from "@prisma/client";

const patchCourse = cache((title: string, body: string, id: string) =>
    fetch(`/api/course/${id}`, {
        headers: {"Content-Type": "application/json"},
        method: "PATCH",
        body: JSON.stringify({
            title,
            body,
        })
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
    const [course, setCourse] = useState<Course>(use<Course>(getCourse(id)));
    const router = useRouter()
    if (!course) {
        return (
            <Modal>
                <CourseLoad/>
            </Modal>
        )
    }

    const handleEdit = async () => {
        await patchCourse(course.title, course.body, id);
        router.back();
    };
    return (
        <Modal>
            <form onSubmit={handleEdit} method={'post'}>
                <Input title={"Name"} type={'text'} defaultValue={course.title}
                       onChangeInput={e => setCourse({...course, title: e.target.value.trim()})}/>
                <Input title={"Description"} type={'text'} defaultValue={course.body}
                       onChangeArea={e => setCourse({...course, body: e.target.value.trim()})} isArea={true}/>
                <Button type={'submit'}>Confirm</Button>
            </form>
        </Modal>
    )
}