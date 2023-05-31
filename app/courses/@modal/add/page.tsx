'use client';
import Modal from "@/components/Modal";
import Button from "@/components/Button";
import {useEffect, useState} from "react";
import Input from "@/components/InputC";
import {useRouter} from "next/navigation";
import {Course} from "@prisma/client";

export default function Add() {
    const [course, setCourse] = useState<Course>({id: '', title: '', body: '', published: false});
    const router = useRouter()
    const handleAdd = async () => {
        const {title, body} = course
        await fetch(`/api/course/course`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title,
                body,
            })
        });
        router.push('/courses')
    };
    const [heading, setHeading] = useState<string>('');
    useEffect(() => {
        if (course.title !== "") {
            setHeading(`named "${course.title}"`);
        } else {
            setHeading('');
        }
    }, [course.title]);
    return (
        <Modal>
            <form onSubmit={handleAdd} method={'post'}>
                <h2>Create new course {heading}</h2>
                <Input title={"Name"} type={'text'}
                       onChangeInput={e => setCourse({...course, title: e.target.value.trim()})}/>
                <Input title={"Description"} type={'text'}
                       onChangeArea={e => setCourse({...course, body: e.target.value.trim()})} isArea={true}/>
                <Button type={'submit'}>Confirm</Button>
            </form>
        </Modal>
    )
}