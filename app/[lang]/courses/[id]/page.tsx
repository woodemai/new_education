import { getDictionary } from "@/get-dictionaries";
import { Locale } from "@/i18n-config";
import { CourseInfo, Lessons, Buttons } from "@/components/pages/course";
import prisma from "@/lib/prisma";
import CourseLoad from "@/components/loading/CourseLoad";

interface Props { params: { id: string, lang: Locale } }

const CoursePage = async ({ params: { id, lang } }: Props) => {

    const { coursePage } = await getDictionary(lang);
    const course = await prisma.course.findUnique({ where: { id } })
    const lessons = await prisma.course.findUnique({ where: { id } }).lessons();

    if (course && lessons) {
        return (
            <>
                <CourseInfo course={course} />
                <Lessons lessons={lessons} dictionary={coursePage.lessons} />
                <Buttons id={id} dictionary={coursePage.buttons} />
            </>
        )
    }
    
    return <CourseLoad />
}
export default CoursePage