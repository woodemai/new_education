'use client'
import { Button } from "@/components/shared/button";
import { Input } from "@/components/shared/input";
import { ChangeEvent, memo, useState } from "react";

interface Props {
    title: string,
    body: string,
    edit: string,
    save: string,
    handleEdit: (title: string, body: string) => void
}

const LessonInfo = memo(function Info({ title, body, edit , save, handleEdit}: Props) {

    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(title)
    const [newBody, setNewBody] = useState(body)

    const handleEditing = () => {
        if(editing) {
            handleEdit(newTitle ,newBody)
        }
        setEditing(!editing)
    }

    const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) =>{
        setNewTitle(e.target.value)
    }

    const handleBodyChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewBody(e.target.value)
    }

    return (
        <>
            {editing ? <Input onChangeInput={handleTitleChange} type="text" defaultValue={title}/> : <h2>{title}</h2>}
            {editing ? <Input onChangeInput={handleBodyChange} type="text" defaultValue={body} /> : <p>{body}</p>}
            <Button onClick={handleEditing}>{editing ? save: edit}</Button>

        </>
    )
})
export default LessonInfo