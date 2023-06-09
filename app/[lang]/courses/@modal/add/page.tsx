import AddCourseModal from "@/components/modals/AddCourseModal";
import {Locale} from "@/i18n-config";
import {getDictionary} from "@/get-dictionaries";

export default async function Page({params: {lang}}: { params: { lang: Locale } }) {
    const {coursesPage} = await getDictionary(lang);
    return <AddCourseModal dictionary={coursesPage.modals.createCourse}/>
}