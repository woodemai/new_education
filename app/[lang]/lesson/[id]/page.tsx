import ListLoader from "@/components/loading/reviews/ListLoader";

import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionaries";
import { getLessonServer } from "@/utils/getLesson";
import { Buttons, LessonInfo } from "@/components/pages/lesson";

interface Props {
    params: { id: string, lang: Locale }
}

const LessonPage = async ({ params: { id, lang } }: Props) => {

    const { lessonPage } = await getDictionary(lang);
    const lesson = await getLessonServer(id);

    if (lesson) {
        return (
            <>
                <LessonInfo title={lesson.title} body={lesson.body} />
                <Buttons lesson={lesson} dictionary={lessonPage.buttons} />
            </>
        )
    }
    return <ListLoader />
}
export default LessonPage