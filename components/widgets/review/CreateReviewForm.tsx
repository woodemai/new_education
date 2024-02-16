'use client'

import { Button } from "@/components/shared/button";
import { Form } from "@/components/shared/form";
import { Input } from "@/components/shared/input";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

interface Props {
    createNewReview: string,
    title: string,
    review: string,
    send: string
    handleCreate: (title: string, body: string, author: string) => void
}

const CreateReviewForm = ({ createNewReview, title: name, review, send, handleCreate }: Props) => {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const { data } = useSession()
    const router = useRouter()

    const handleClick = () => {
        handleCreate(title, body, data?.user?.name ?? '')
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
            <h2>{createNewReview}</h2>
            <Input title={name} type="text" onChangeInput={onTitleChange} />
            <Input title={review} type="text" isArea onChangeArea={onBodyChange} />
            <Button onClick={handleClick}>{send}</Button>
            <Button variant="secondary" onClick={handleBack}>Back</Button>
        </Form>
    )
}

export default CreateReviewForm;