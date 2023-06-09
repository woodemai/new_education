import {Locale} from "@/i18n-config";
import {getDictionary} from "@/get-dictionaries";
import EditCourseModal from "@/components/modals/EditCourseModal";

export default async function Page({params: {id, lang}}: { params: { id: string, lang: Locale } }) {
    const {coursePage} = await getDictionary(lang);
    return <EditCourseModal id={id} dictionary={coursePage.modals.editCourse}/>
}