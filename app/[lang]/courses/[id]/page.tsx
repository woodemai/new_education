import Buttons from "@/components/coursePage/Buttons";
import Lessons from "@/components/coursePage/Lessons";
import CourseInfo from "@/components/coursePage/CourseInfo";
import {getDictionary} from "@/get-dictionaries";
import {Locale} from "@/i18n-config";
import prisma from "@/lib/prisma";
import CourseLoad from "@/components/loading/CourseLoad";

export default async function CoursePage({params: {id, lang}}: { params: { id: string, lang: Locale } }) {
    const {coursePage} = await getDictionary(lang);
    const course = await prisma.course.findUnique({where: {id}})
    const lessons = await prisma.course.findUnique({where: {id}}).lessons();
    if (course && lessons) {
        return (
            <>
                <CourseInfo course={course}/>
                <Lessons lessons={lessons} dictionary={coursePage.lessons}/>
                <Buttons id={id} dictionary={coursePage.buttons}/>
            </>
        )
    } else {
        return <CourseLoad/>
    }
}