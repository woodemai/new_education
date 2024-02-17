import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionaries";
import { editLesson, getLesson } from "@/utils/lesson";
import { Buttons, LessonInfo } from "@/components/pages/lesson";

interface Props {
    params: { id: string, lang: Locale }
}

const LessonPage = async ({ params: { id, lang } }: Props) => {

    const { lessonPage } = await getDictionary(lang);
    const lesson = await getLesson(id);
    
    const handleEdit = async (title: string, body: string) => {
        'use server'
        await editLesson(id, title, body)
    }

    if (lesson) {

        const { title, body, courseId } = lesson;
        
        return (
            <>
                <LessonInfo handleEdit={handleEdit} edit={lessonPage.edit} save={lessonPage.save } title={title} body={body} />
                <Buttons id={id} courseId={courseId} deleteText={lessonPage.buttons.delete} back={lessonPage.buttons.back} />
            </>
        )
    }
}
export default LessonPage;