import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionaries";
import AddReviewModal from "@/components/modals/AddReviewModal";

interface Props {
    params: { lang: Locale }
}

const AddReviewPage = async ({ params: { lang } }: Props) => {

    const { reviewsPage } = await getDictionary(lang);

    return <AddReviewModal dictionary={reviewsPage.addReviewModal} />
}

export default AddReviewPage;