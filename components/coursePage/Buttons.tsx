import styles from "@/styles/utils.module.css";
import Button from "@/components/Button";
import {useRouter} from "next/navigation";

export default function Buttons({id}: { id: string }) {
    const router = useRouter()
    return (
        <div className={styles.list}>
            <Button onClick={() => router.push(`/courses/${id}/add-lesson`)}>Add lesson</Button>
            <Button onClick={() => router.push(`/courses/${id}/edit`)}>Edit</Button>
            <Button onClick={() => router.push(`/courses/${id}/delete`)}>Delete</Button>
            <Button onClick={() => router.push('/courses')}>Go back</Button>
        </div>
    )
}