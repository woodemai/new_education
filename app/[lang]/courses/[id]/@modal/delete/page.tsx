import DeleteCourseModal from "@/components/modals/DeleteCourseModal";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionaries";
import { FC } from "react";

interface Props {
    params: { id: string, lang: Locale }
}

const Page: FC<Props> = async ({ params: { id, lang } }) => {
    const { coursePage } = await getDictionary(lang);
    return <DeleteCourseModal id={id} dictionary={coursePage.modals.deleteLesson} />
}
export default Page;