import ListLoader from "@/components/loading/reviews/ListLoader";
import Buttons from "@/components/lessonPage/Buttons";
import LessonInfo from "@/components/lessonPage/LessonInfo";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionaries";
import { getLessonServer } from "@/utils/getLesson";


export default async function LessonPage({ params: { id, lang } }: { params: { id: string, lang: Locale } }) {
    const { lessonPage } = await getDictionary(lang);
    const lesson = await getLessonServer(id);
    return lesson
        ? (
            <>
                <LessonInfo lesson={lesson} />
                <Buttons lesson={lesson} dictionary={lessonPage.buttons} />
            </>
        )
        : <ListLoader />
}