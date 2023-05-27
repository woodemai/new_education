'use client'
import Modal from "@/components/Modal";
import Input from "@/components/InputC";
import Button from "@/components/Button";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {CourseProps} from "@/app/courses/page";

export default function EditPage({params}: { params: { id: string } }) {
    const {id} = params;
    const [course, setCourse] = useState<CourseProps | null>();
    const router = useRouter()
    useEffect(() => {
        const getData = async () => {
            const response = await fetch(`/api/course/${id}`, {
                method: "GET"
            });
            if (!response.ok) {
                console.error(`Failed to fetch post ${id}`);
                return;
            }
            const data = await response.json();
            setCourse(data);
        }
        if (id) {
            getData()
        }
    }, [id]);
    if (!course) {
        return (
            <>
                <h1>Loading...</h1>
            </>
        )
    }

    const handleEdit = async () => {
        const {title, body} = course;
        await fetch(`/api/course/course`, {
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
        await router.back()
        await router.refresh()
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