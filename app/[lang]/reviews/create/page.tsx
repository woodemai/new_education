import CreateReviewForm from "@/components/widgets/review/CreateReviewForm";
import { getDictionary } from "@/get-dictionaries";
import { Locale } from "@/i18n-config";
import prisma from "@/lib/prisma";

interface Props {
    params: { lang: Locale }
}

const CreateReviewPage = async ({ params }: Props) => {

    const { reviewsPage } = await getDictionary(params.lang);

    const handleCreate = async (title: string, body: string, author: string) => {
        'use server'
        
        await prisma.review.create({
            data: {
                title,
                body,
                author
            }
        })
    }

    return <CreateReviewForm handleCreate={handleCreate} {...reviewsPage.addReviewModal} />
}

export default CreateReviewPage;