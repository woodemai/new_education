'use client'

import { Input } from "@/components/shared/input";
import { Button } from "@/components/shared/button";
import Modal from "@/components/modals/Modal";
import { useRouter } from "next/navigation";
import { cache, useState } from "react";
import { Lesson } from "@prisma/client";

const patchLesson = cache((title: string, body: string, id: string) =>
    fetch(`/api/lesson/${id}`, {
        headers: { "Content-Type": "application/json" },
        method: "PATCH",
        body: JSON.stringify({
            title,
            body,
        })
    })
);
export default function EditLessonModal({ less }: { less: Lesson }) {
    const [lesson, setLesson] = useState(less);
    const router = useRouter()
    const handleEdit = async () => {
        await patchLesson(lesson.title, lesson.body, lesson.id);
        router.back()
    };
    return (
        <Modal>
            <form onSubmit={handleEdit} method="post">
                <Input title="Name" type="text" defaultValue={lesson.title}
                    onChangeInput={e => setLesson({ ...lesson, title: e.target.value.trim() })} />
                <Input title="Description" type="text" defaultValue={lesson.body}
                    onChangeArea={e => setLesson({ ...lesson, body: e.target.value.trim() })} isArea={true} />
                <Button type="submit">Confirm</Button>
            </form>
        </Modal>
    )
}