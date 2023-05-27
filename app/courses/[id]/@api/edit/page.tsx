'use client'
import Modal from "@/components/Modal";
import Input from "@/components/InputC";
import Button from "@/components/Button";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {CourseProps} from "@/app/courses/page";
export default function EditPage({params}: { params: { id: string } }) {
    const {id} = params;
    const [title, setTitle] = useState<string>("");
    const [body, setBody] = useState<string>("");
    const [course, setCourse] = useState<CourseProps | null>();
    const router = useRouter()
    useEffect(() => {
        const getData = async () => {
            const response = await fetch(`/api/${id}`, {
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
        await fetch(`/api/course`, {
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
        router.refresh()
        router.back()
    };
    return (
        <Modal>
            <form onSubmit={handleEdit} method={'post'}>
                <Input title={"Name"} type={'text'} defaultValue={course.title} setValue={setTitle}/>
                <Input title={"Description"} type={'text'} defaultValue={course.body} setValue={setBody} isArea={true}/>
                <Button type={'submit'}>Confirm</Button>
            </form>
        </Modal>
    )
}