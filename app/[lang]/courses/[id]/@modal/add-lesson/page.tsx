'use client'
import Modal from "@/components/Modal";
import Input from "@/components/InputC";
import Button from "@/components/Button";
import {cache, useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {Lesson} from "@prisma/client";

const postLesson = cache((title: string, body: string, courseId: string) =>
    fetch(`/api/lesson`, {
        headers: {"Content-Type": "application/json"},
        method: "POST",
        body: JSON.stringify({
            title,
            body,
            courseId,
        })
    }).then((res) => res.json())
);

export default function AddLessonPage({params}: { params: { id: string } }) {
    const {id} = params;
    const [lesson, setLesson] = useState<Lesson>(
        {id: '', courseId: '', title: '', body: ''}
    );
    const [heading, setHeading] = useState<string>('');
    useEffect(() => {
        if (lesson.title !== "") {
            setHeading(`named "${lesson.title}"`);
        } else {
            setHeading('');
        }
    }, [lesson.title]);
    const router = useRouter()

    const handleAdd = async () => {
        if (lesson.title !== "" && lesson.body !== "") {
            postLesson(lesson.title, lesson.body, id);
            router.back()
        } else {
            alert("Title and Description should not be empty!")
        }
    };
    return (
        <Modal>
            <form onSubmit={handleAdd} method={'post'}>
                <h2>Create new lesson {heading}</h2>
                <Input title={"Name"} type={'text'}
                       onChangeInput={e => setLesson({...lesson, title: e.target.value.trim()})}/>
                <Input title={"Description"} type={'text'}
                       onChangeArea={e => setLesson({...lesson, body: e.target.value.trim()})} isArea={true}/>
                <Button type={'submit'}>Confirm</Button>
            </form>
        </Modal>
    )
}