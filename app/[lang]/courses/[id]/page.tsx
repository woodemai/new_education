import Buttons from "@/components/coursePage/Buttons";
import Lessons from "@/components/coursePage/Lessons";
import CourseInfo from "@/components/coursePage/CourseInfo";
import {getDictionary} from "@/get-dictionaries";
import {Locale} from "@/i18n-config";

export default async function CoursePage({params}: { params: { id: string, lang: Locale } }) {
    const {lang} = params;
    const {coursePage} = await getDictionary(lang);
    const {id} = params;
    return (
        <>
            <CourseInfo id={id}/>
            <Lessons id={id} dictionary={coursePage.lessons}/>
            <Buttons id={id} dictionary={coursePage.buttons}/>
        </>
    )
}