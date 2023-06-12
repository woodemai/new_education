import ListLoader from "@/components/loading/reviews/ListLoader";
import Buttons from "@/components/lessonPage/Buttons";
import LessonInfo from "@/components/lessonPage/LessonInfo";
import {Locale} from "@/i18n-config";
import {getDictionary} from "@/get-dictionaries";
import prisma from "@/lib/prisma";


export default async function LessonPage({params: {id, lang}}: { params: { id: string, lang: Locale } }) {
    const {lessonPage} = await getDictionary(lang);
    const lesson = await prisma.lesson.findUnique({where: {id}});
    return lesson
        ? (
            <>
                <LessonInfo lesson={lesson}/>
                <Buttons lesson={lesson} dictionary={lessonPage.buttons}/>
            </>
        )
        : <ListLoader/>
}