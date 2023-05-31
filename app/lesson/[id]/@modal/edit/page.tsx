'use client'
import Modal from "@/components/Modal";
import Input from "@/components/InputC";
import Button from "@/components/Button";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {Lesson} from "@prisma/client";
import CourseLoad from "@/components/loading/CourseLoad";

export default function EditPage({params}: { params: { id: string } }) {
    const {id} = params;
    const [lesson, setLesson] = useState<Lesson | null>();
    const router = useRouter()
    useEffect(() => {
        const getData = async () => {
            const response = await fetch(`/api/lesson/${id}`, {
                method: "GET"
            });
            if (!response.ok) {
                console.error(`Failed to fetch post ${id}`);
                return;
            }
            const data = await response.json();
            setLesson(data);
        }
        if (id) {
            getData()
        }
    }, [id]);
    if (!lesson) {
        return (
            <Modal>
                <CourseLoad/>
            </Modal>
        )
    }

    const handleEdit = async () => {
        const {title, body} = lesson;
        await fetch(`/api/lesson/edit`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(
                {
                    id,
                    title,
                    body,
                }
            )
        });
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