'use client'
import Button from "@/components/Button";
import styles from '../../../styles/utils.module.css'
import {useSession} from "next-auth/react";
import ListLoader from "@/components/loading/reviews/ListLoader";
import {useRouter} from "next/navigation";

export default function AdminPanel() {
    const session = useSession()
    const router = useRouter()
    if (session.status === 'loading') {
        return <ListLoader/>;
    } else if (session.status === 'unauthenticated') {
        router.push('/');
    } else if (session.status === 'authenticated') {
        return (
            <div className={styles.container}>
                <h2>Admin panel</h2>
                <h3>Courses</h3>
                <Button>Add course</Button>
                <Button>Delete course</Button>
                <h3>Lessons</h3>
                <Button>Add lesson</Button>
                <Button>Delete lesson</Button>
                <h3>Admins</h3>
                <Button>Add admin</Button>
                <Button> Remove admin</Button>
            </div>
        );
    }
}