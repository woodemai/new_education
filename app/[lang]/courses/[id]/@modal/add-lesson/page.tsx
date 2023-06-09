import AddLessonModal from "@/components/modals/AddLessonModal";
import {Locale} from "@/i18n-config";
import {getDictionary} from "@/get-dictionaries";

export default async function AddLessonPage({params: {id, lang}}: { params: { id: string, lang: Locale } }) {
    const {coursePage} = await getDictionary(lang);
    return <AddLessonModal id={id} dictionary={coursePage.modals.createLesson}/>
}