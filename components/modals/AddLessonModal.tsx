'use client'
import {cache, useEffect, useState} from "react";
import {Lesson} from "@prisma/client";
import {useRouter} from "next/navigation";
import Modal from "@/components/modals/Modal";
import Input from "@/components/InputC";
import Button from "@/components/Button";

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
export default function AddLessonModal({id, dictionary}: {
    id: string,
    dictionary: {
        heading: string,
        named: string,
        name: string,
        description: string,
        confirm: string,
        warning: string
    }
}) {
    const [lesson, setLesson] = useState<Lesson>(
        {id: '', courseId: id, title: '', body: ''}
    );
    const [heading, setHeading] = useState<string>('');
    useEffect(() => {
        if (lesson.title !== "") {
            setHeading(`${dictionary.named} "${lesson.title}"`);
        } else {
            setHeading('');
        }
    }, [lesson.title]);
    const router = useRouter()

    const handleAdd = async () => {
        if (lesson.title !== "" && lesson.body !== "") {
            await postLesson(lesson.title, lesson.body, id);
            router.back()
        } else {
            alert(dictionary.warning)
        }
    };
    return (
        <Modal>
            <form onSubmit={handleAdd} method="post">
                <h2>Create new lesson {heading}</h2>
                <Input title={dictionary.name} type={'text'}
                       onChangeInput={e => setLesson({...lesson, title: e.target.value.trim()})}/>
                <Input title={dictionary.description} type={'text'}
                       onChangeArea={e => setLesson({...lesson, body: e.target.value.trim()})} isArea={true}/>
                <Button type="submit">{dictionary.confirm}</Button>
            </form>
        </Modal>
    )
}