"use client";
import Modal from "@/components/Modal";
import Input from "@/components/InputC";
import Button from "@/components/Button";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import addReview from "@/app/reviews/@modal/add/add";
import {signIn, useSession} from "next-auth/react";
import CourseLoad from "@/components/loading/CourseLoad";

export default function AddReviewPage() {
    const session = useSession();
    const author = String(session.data?.user?.name);
    const router = useRouter();

    const [title, setTitle] = useState<string>("");
    const [body, setBody] = useState<string>("");
    const handleAdd = async () => {
        await addReview(title, body, author);
        router.back()
    };
    const [heading, setHeading] = useState<string>("");
    useEffect(() => {
        if (title !== "") {
            setHeading(`with title "${title}"`);
        } else {
            setHeading("");
        }
    }, [title]);
    if (session.status === "loading") {
        return (
            <Modal>
                <CourseLoad/>
            </Modal>
        );
    }
    if (session.status === 'unauthenticated') {
        return (
            <Modal>
                <h1>You need to be authenticated to view this page</h1>
                <Button type={'button'} onClick={() => signIn()}>Login</Button>
            </Modal>
        )
    }
    return (
        <Modal>
            <form onSubmit={handleAdd} method={"post"}>
                <h2>Create new review {heading}</h2>
                <Input title={"Title"} type={"text"}
                       onChangeInput={e => setTitle(e.target.value.trim())}/>
                <Input title={"Review"} type={"text"}
                       onChangeArea={e => setBody(e.target.value.trim())} isArea={true}/>
                <Button type={"submit"}>Confirm</Button>
            </form>
        </Modal>
    );
}