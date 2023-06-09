import DeleteCourseModal from "@/components/modals/DeleteCourseModal";
import {Locale} from "@/i18n-config";
import {getDictionary} from "@/get-dictionaries";

export default async function Page({params: {id, lang}}: { params: { id: string, lang: Locale } }) {
    const {coursePage} = await getDictionary(lang);
    return <DeleteCourseModal id={id} dictionary={coursePage.modals.deleteLesson}/>
}