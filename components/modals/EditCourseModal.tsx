'use client'
import {cache, use, useState} from "react";
import {Course} from "@prisma/client";
import {useRouter} from "next/navigation";
import Modal from "@/components/modals/Modal";
import Input from "@/components/InputC";
import Button from "@/components/Button";
import {getCourse} from "@/utils/getCourse";

const patchCourse = cache((title: string, body: string, id: string) =>
    fetch(`/api/course/${id}`, {
        headers: {"Content-Type": "application/json"},
        method: "PATCH",
        body: JSON.stringify({
            title,
            body,
        })
    }).then((res) => res.json())
);
export default function EditCourseModal({id, dictionary}: {
                                            id: string,
                                            dictionary: {
                                                heading: string,
                                                name: string,
                                                description: string,
                                                confirm: string,
                                            }
                                        }
) {
    const [course, setCourse] = useState<Course>(use<Course>(getCourse(id)));
    const router = useRouter()
    const handleEdit = async () => {
        await patchCourse(course.title, course.body, id);
        router.back();
    };
    return (
        <Modal>
            <form onSubmit={handleEdit} method="post">
                <h2>{dictionary.heading}</h2>
                <Input title={dictionary.name} type={'text'} defaultValue={course.title}
                       onChangeInput={e => setCourse({...course, title: e.target.value.trim()})}/>
                <Input title={dictionary.description} type={'text'} defaultValue={course.body}
                       onChangeArea={e => setCourse({...course, body: e.target.value.trim()})} isArea={true}/>
                <Button type="submit">{dictionary.confirm}</Button>
            </form>
        </Modal>
    )
}