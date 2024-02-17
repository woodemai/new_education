'use client'

import { Button } from "@/components/shared/button";
import { Form } from "@/components/shared/form";
import { useRouter } from "next/navigation";

interface Props {
    handleDelete: () => void,
    title: string
}


const DeleteLessonForm = ({handleDelete, title}:Props) => {

    const router = useRouter()
    
    const handleClick = () => {
        handleDelete()
    }

    const handleBack = () => {
        router.back()
    }

    return (
        <Form>
            <h2>Вы уверены, что хотите удалить урок {title}</h2>
            <Button variant="destructive" onClick={handleClick}>Да, удалить</Button>
            <Button variant="secondary" onClick={handleBack}>Нет, отменить</Button>
        </Form>
    )
}

export default DeleteLessonForm;