'use client'
import Modal from "@/components/modals/Modal";
import Input from "@/components/InputC";
import Button from "@/components/Button";
import {cache, use, useState} from "react";
import {useRouter} from "next/navigation";
import {Lesson} from "@prisma/client";
import CourseLoad from "@/components/loading/CourseLoad";

const patchLesson = cache((title: string, body: string, id: string) =>
    fetch(`/api/lesson/${id}`, {
        headers: {"Content-Type": "application/json"},
        method: "PATCH",
        body: JSON.stringify({
            title,
            body,
        })
    }).then((res) => res.json())
);
const getLesson = cache((id: string) =>
    fetch(`/api/lesson/${id}`, {
        headers: {"Content-Type": "application/json"},
        method: "GET"
    }).then((res) => res.json())
);

export default function EditPage({params}: { params: { id: string } }) {
    const {id} = params;
    const [lesson, setLesson] = useState<Lesson>(use<Lesson>(getLesson(id)));
    const router = useRouter()
    if (!lesson) {
        return (
            <Modal>
                <CourseLoad/>
            </Modal>
        )
    }

    const handleEdit = async () => {
        await patchLesson(lesson.title, lesson.body, id);
        router.back()
    };
    return (
        <Modal>
            <form onSubmit={handleEdit} method={'post'}>
                <Input title={"Name"} type={'text'} defaultValue={lesson.title}
                       onChangeInput={e => setLesson({...lesson, title: e.target.value.trim()})}/>
                <Input title={"Description"} type={'text'} defaultValue={lesson.body}
                       onChangeArea={e => setLesson({...lesson, body: e.target.value.trim()})} isArea={true}/>
                <Button type={'submit'}>Confirm</Button>
            </form>
        </Modal>
    )
}