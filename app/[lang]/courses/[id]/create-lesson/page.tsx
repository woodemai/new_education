import { getDictionary } from "@/get-dictionaries";
import { Locale } from "@/i18n-config";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import CreateForm from "@/components/widgets/course/CreateForm";


interface Props {
    params: { id: string, lang: Locale }
}

const CreateLesson = async ({ params }: Props) => {

    const { id } = params;
    const { createLesson } = (await getDictionary(params.lang)).coursePage.modals;

    const handleCreate = async (title: string, body: string) => {
        'use server'
        await prisma.lesson.create({
            data: {
                title,
                body,
                courseId: id
            }
        }).then(() => redirect(`/courses/${id}`))
    }

    return <CreateForm {...createLesson} handleCreate={handleCreate} />
}

export default CreateLesson;