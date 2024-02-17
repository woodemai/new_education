import DeleteLessonForm from "@/components/widgets/lesson/DeleteLessonForm";
import { deleteLesson, getLesson } from "@/utils/lesson";
import { redirect } from "next/navigation";

interface Props { params: { id: string }}

const DeleteLessonPage = async({params}:Props) => {

    const {title, courseId} = await getLesson(params.id) ?? {};


    const handleDelete = async () => {        
        'use server'

        console.log(courseId);
        

        await deleteLesson(params.id)
        .then(() => redirect(`/courses/${courseId ?? ''}`))
    }

    return <DeleteLessonForm handleDelete={handleDelete} title={title ?? ''} />
}

export default DeleteLessonPage;