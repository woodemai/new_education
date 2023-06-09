import {Locale} from "@/i18n-config";
import {getDictionary} from "@/get-dictionaries";
import AddReviewModal from "@/components/modals/AddReviewModal";


export default async function AddReviewPage({params: {lang}}: { params: { lang: Locale } }) {
    const {reviewsPage} = await getDictionary(lang);
    return <AddReviewModal dictionary={reviewsPage.addReviewModal}/>
}