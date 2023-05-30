'use client'
import Modal from "@/components/Modal";
import Input from "@/components/InputC";
import Button from "@/components/Button";
import {useEffect, useState} from "react";
import {ReviewProps} from "@/lib/interfaces";
import {useRouter} from "next/navigation";
import addReview from "@/app/reviews/@modal/add/add";
import {useSession} from "next-auth/react";

export default function AddReviewPage() {
    const {data: session} = useSession()
    console.log(session)
    const [review, setReview] = useState<ReviewProps>({id: '', title: '', body: '', userId: ''});
    const router = useRouter()
    const handleAdd = async () => {
        await addReview(review)
        router.back()
    };
    const [heading, setHeading] = useState<string>('');
    useEffect(() => {
        if (review.title !== "") {
            setHeading(`with title "${review.title}"`);
        } else {
            setHeading('');
        }
    }, [review.title]);
    return (
        <Modal>
            <form onSubmit={handleAdd} method={'post'}>
                <h2>Create new review {heading}</h2>
                <Input title={"Title"} type={'text'}
                       onChangeInput={e => setReview({...review, title: e.target.value.trim()})}/>
                <Input title={"Review"} type={'text'}
                       onChangeArea={e => setReview({...review, body: e.target.value.trim()})} isArea={true}/>
                <Button type={'submit'}>Confirm</Button>
            </form>
        </Modal>
    )
}