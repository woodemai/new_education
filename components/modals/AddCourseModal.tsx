'use client'
import React, { FC, cache, useEffect, useState } from "react";
import { Course } from "@prisma/client";
import Modal from "@/components/modals/Modal";
import {Input} from "@/components/shared/input";
import { Button } from "@/components/shared/button";
import { useRouter } from "next/navigation";

const postCourse = cache((title: string, body: string) =>
    fetch(`/api/course`, {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify({
            title,
            body,
        })
    }).then((res) => res.json())
);

interface Props {
    dictionary: {
        heading: string,
        named: string,
        name: string,
        description: string,
        confirm: string
    }
}

const AddCourseModal: FC<Props> = ({ dictionary }) => {
    const [course, setCourse] = useState<Course>({ id: '', title: '', body: '', published: false, language: 'en' });
    const [heading, setHeading] = useState<string>('');

    const router = useRouter()

    useEffect(() => {
        if (course.title !== "") {
            setHeading(`${dictionary.named} "${course.title}"`);
        } else {
            setHeading('');
        }
    }, [course.title, dictionary.named]);

    const handleAdd = async (): Promise<void> => {
        await postCourse(course.title, course.body)
            .then(() => router.push('/courses'));
    };

    return (
        <Modal>
            <form method="post">
                <h2>{dictionary.heading} {heading}</h2>
                <Input title={dictionary.name} type={'text'}
                    onChangeInput={e => setCourse({ ...course, title: e.target.value.trim() })} />
                <Input title={dictionary.description} type={'text'}
                    onChangeArea={e => setCourse({ ...course, body: e.target.value.trim() })} isArea={true} />
                <Button type="button" onClick={handleAdd}>{dictionary.confirm}</Button>
            </form>
        </Modal>
    )
}
export default AddCourseModal