import { getDictionary } from "@/get-dictionaries";
import { Locale } from "@/i18n-config";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import CreateForm from "@/components/widgets/course/CreateForm";


interface Props {
    params: { lang: Locale }
}

const CreateCoursePage = async ({ params }: Props) => {

    const { coursesPage } = await getDictionary(params.lang);

    const handleCreate = async (title: string, body: string) => {
        'use server'
        await prisma.course.create({
            data: {
                title,
                body,
                language: params.lang,
            }
        }).then(course => redirect(`/courses/${course.id}`))

    }

    return <CreateForm handleCreate={handleCreate} {...coursesPage.modals.createCourse} />

}

export default CreateCoursePage;