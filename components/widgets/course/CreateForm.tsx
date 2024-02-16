'use client'

import { Button } from "@/components/shared/button";
import { Form } from "@/components/shared/form";
import { Input } from "@/components/shared/input";
import { useRouter } from "next/navigation";
import { ChangeEvent, memo, useState } from "react";

interface Props {
    heading: string,
    name: string,
    description: string,
    confirm: string,
    handleCreate: (title: string, body: string) => void
}

const CreateForm = memo(function CreateForm({ heading, name, description, confirm, handleCreate }: Props) {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const router = useRouter()

    const handleClick = () => {
        handleCreate(title, body)
    }
    const handleBack = () => {
        router.push('/courses')
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
            <Input title={name} type="text" onChangeInput={onTitleChange} />
            <Input title={description} type="text" isArea onChangeArea={onBodyChange} />
            <Button onClick={handleClick}>{confirm}</Button>
            <Button variant="secondary" onClick={handleBack}>Back</Button>
        </Form>
    )
})

export default CreateForm;