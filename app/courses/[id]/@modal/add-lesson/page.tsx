'use client'
import Modal from "@/components/Modal";
import Input from "@/components/InputC";
import Button from "@/components/Button";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {LessonProps} from "@/app/courses/[id]/@lesson/page";

export default function AddLessonPage({params}: { params: { id: string } }) {
    const {id} = params;
    const [lesson, setLesson] = useState<LessonProps>(
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
            const {title, body} = lesson;
            await fetch(`/api/lesson/add`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(
                    {
                        courseId: id,
                        title,
                        body,
                    }
                )
            });
            await router.back()
            await router.refresh()
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