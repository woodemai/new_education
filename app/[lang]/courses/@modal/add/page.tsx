'use client';
import Modal from "@/components/Modal";
import Button from "@/components/Button";
import {cache, useEffect, useState} from "react";
import Input from "@/components/InputC";
import {useRouter} from "next/navigation";
import {Course} from "@prisma/client";

const postCourse = cache((title: string, body: string) =>
    fetch(`/api/course`, {
        headers: {"Content-Type": "application/json"},
        method: "POST",
        body: JSON.stringify({
            title,
            body,
        })
    }).then((res) => res.json())
);
export default function Page() {
    const [course, setCourse] = useState<Course>({id: '', title: '', body: '', published: false, language: 'en'});
    const [heading, setHeading] = useState<string>('');
    const router = useRouter()
    useEffect(() => {
        if (course.title !== "") {
            setHeading(`named "${course.title}"`);
        } else {
            setHeading('');
        }
    }, [course.title]);
    const handleAdd = async (): Promise<void> => {
        await postCourse(course.title, course.body);
        router.push('/courses');
    };
    return (
        <Modal>
            <form method="dialog">
                <h2>Create new course {heading}</h2>
                <Input title={"Name"} type={'text'}
                       onChangeInput={e => setCourse({...course, title: e.target.value.trim()})}/>
                <Input title={"Description"} type={'text'}
                       onChangeArea={e => setCourse({...course, body: e.target.value.trim()})} isArea={true}/>
                <Button type="button" onClick={handleAdd}>Confirm</Button>
            </form>
        </Modal>
    )
}