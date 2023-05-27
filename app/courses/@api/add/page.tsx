'use client';
import Modal from "@/components/Modal";
import Button from "@/components/Button";
import {useState} from "react";
import Input from "@/components/InputC";
import {useRouter} from "next/navigation";

export default function Add() {
    const [title, setTitle] = useState<string>("");
    const [body, setBody] = useState<string>("");
    const router = useRouter()
    const handleAdd = async () => {
        await fetch(`/api/course`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(
                {
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
            <form onSubmit={handleAdd} method={'post'}>
                <Input title={"Name"} type={'text'} setValue={setTitle}/>
                <Input title={"Description"} type={'text'} setValue={setBody} isArea={true}/>
                <Button type={'submit'}>Confirm</Button>
            </form>
        </Modal>
    )
}