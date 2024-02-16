import { getDictionary } from "@/get-dictionaries";
import { Locale } from "@/i18n-config";
import { redirect } from "next/navigation";
import { Button } from "@/components/shared/button";
import prisma from "@/lib/prisma";
import ConfirmDeleteButton from "@/components/widgets/course/ConfirmDeleteButton";


interface Props {
    params: { id: string, lang: Locale }
}

const DeleteCoursePage = async ({ params }: Props) => {

    const { id } = params;
    const { warning, deleteText } = (await getDictionary(params.lang)).coursePage.modals.deleteLesson;    

    const handleDelete = async () => {
        'use server'
        await prisma.course.delete({ where: { id }, })
            .then(() => redirect(`/courses`))
    }

    return (
        <>
            <h2>{warning}?</h2>
            <ConfirmDeleteButton handleRemove={handleDelete} deleteText={deleteText} />
            <Button variant="secondary" href={`/courses/${id}`}>Back</Button>
        </>
    )
}

export default DeleteCoursePage;