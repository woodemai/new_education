import { getDictionary } from "@/get-dictionaries";
import { Locale } from "@/i18n-config";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import EditCourseForm from "@/components/widgets/course/EditCourseForm";


interface Props {
    params: { id: string, lang: Locale }
}

const EditCoursePage = async ({ params }: Props) => {

    const { id } = params;
    const { editCourse } = (await getDictionary(params.lang)).coursePage.modals;
    const { title, body } = await prisma.course.findUnique({ where: { id } }) ?? { title: '', body: '' }

    const handleUpdate = async (title: string, body: string) => {
        'use server'
        await prisma.course.update({
            where: { id },
            data: {
                title,
                body
            }
        }).then(() => redirect(`/courses/${id}`))
    }

    return <EditCourseForm {...editCourse} handleUpdate={handleUpdate} initialTitle={title} initialBody={body} />
}

export default EditCoursePage;