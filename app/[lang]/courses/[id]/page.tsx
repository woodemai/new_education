import { getDictionary } from "@/get-dictionaries";
import { Locale } from "@/i18n-config";
import { CourseInfo, LessonList, Buttons } from "@/components/pages/course";
import prisma from "@/lib/prisma";

interface Props { params: { id: string, lang: Locale } }

const CoursePage = async ({ params: { id, lang } }: Props) => {

    const { coursePage } = await getDictionary(lang);
    const course = await prisma.course.findUnique({ where: { id } })
    const lessons = await prisma.course.findUnique({ where: { id } }).lessons();

    return (
        <>
            {course && <CourseInfo title={course.title} body={course.body} />}
            {lessons && <LessonList lessons={lessons} dictionary={coursePage.lessons} />}
            <Buttons id={id} dictionary={coursePage.buttons} />
        </>
    )
}
export default CoursePage