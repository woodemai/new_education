'use client'
import React, {cache, useEffect, useState} from "react";
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import CourseLoad from "@/components/loading/CourseLoad";
import Button from "@/components/Button";
import Input from "@/components/InputC";
import Modal from "@/components/modals/Modal";

const postReview = cache((title: string, body: string, author: string) =>
    fetch(`/api/review`, {
        headers: {"Content-Type": "application/json"},
        method: "POST",
        body: JSON.stringify({
            title,
            body,
            author,
        })
    }).then((res) => res.json())
);

export default function AddReviewModal({dictionary}: {
    dictionary: {
        createNewReview: string,
        withHeading: string,
        title: string,
        review: string,
        send: string
    }
}) {
    const session = useSession();
    const author = String(session.data?.user?.name);
    const router = useRouter();
    const [title, setTitle] = useState<string>("");
    const [body, setBody] = useState<string>("");
    const [heading, setHeading] = useState<string>("");
    const handleAdd = async () => {
        await postReview(title, body, author);
        router.push('/reviews')
    };
    useEffect(() => {
        if (title !== "") {
            setHeading(`${dictionary.withHeading} "${title}"`);
        } else {
            setHeading("");
        }
    }, [title, dictionary.withHeading]);
    if (session.status === "loading") {
        return (
            <Modal>
                <CourseLoad/>
            </Modal>
        );
    }
    if (session.status === 'unauthenticated') {
        router.push('/unauthenticated');
        return null;
    }
    return (
        <Modal>
            <form onSubmit={handleAdd} method="post">
                <h2>{dictionary.createNewReview} {heading}</h2>
                <Input title={dictionary.title} type={"text"}
                       onChangeInput={e => setTitle(e.target.value.trim())}/>
                <Input title={dictionary.review} type={"text"}
                       onChangeArea={e => setBody(e.target.value.trim())} isArea={true}/>
                <Button type="submit">{dictionary.send}</Button>
            </form>
        </Modal>
    );

}