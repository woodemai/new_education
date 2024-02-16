'use client'

import { Button } from "@/components/shared/button";
import { Form } from "@/components/shared/form";
import { Input } from "@/components/shared/input";
import { useRouter } from "next/navigation";
import { ChangeEvent, memo, useState } from "react";

interface Props {
    heading: string,
    named: string,
    name: string,
    description: string,
    confirm: string,
    warning: string,
    initialTitle: string,
    initialBody: string,
    handleUpdate: (title: string, body: string) => void
}

const EditCourseForm = memo(function CreateForm({ heading, name, description, confirm, handleUpdate, initialTitle, initialBody }: Props) {

    const [title, setTitle] = useState(initialTitle)
    const [body, setBody] = useState(initialBody)

    const router = useRouter()

    const handleClick = () => {
        handleUpdate(title, body)
    }
    const handleBack = () => {
        router.back()
    }

    const onTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }

    const onBodyChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setBody(e.target.value)
    }

    return (
        <Form>
            <h2>{heading}</h2>
            <Input title={name} type="text" defaultValue={title} onChangeInput={onTitleChange} />
            <Input title={description} type="text" defaultValue={body} isArea onChangeArea={onBodyChange} />
            <Button onClick={handleClick}>{confirm}</Button>
            <Button variant="secondary" onClick={handleBack}>Back</Button>
        </Form>
    )
})

export default EditCourseForm;