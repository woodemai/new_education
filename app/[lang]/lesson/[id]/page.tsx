import {use} from "react";
import {Lesson} from "@prisma/client";
import ListLoader from "@/components/loading/reviews/ListLoader";
import {getLesson} from "@/utils/getLesson";
import Buttons from "@/components/lessonPage/Buttons";
import LessonInfo from "@/components/lessonPage/LessonInfo";
import {Locale} from "@/i18n-config";
import {getDictionary} from "@/get-dictionaries";


export default async function LessonPage({params: {id, lang}}: { params: { id: string, lang: Locale } }) {
    const {lessonPage} = await getDictionary(lang);
    const lesson = use<Lesson>(getLesson(id));
    return lesson
        ? (
            <>
                <LessonInfo lesson={lesson}/>
                <Buttons lesson={lesson} dictionary={lessonPage.buttons}/>
            </>
        )
        : <ListLoader/>
}