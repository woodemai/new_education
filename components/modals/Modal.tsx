import styles from '../../styles/modal.module.css'
import {useRouter} from "next/navigation";
import {ReactNode} from "react";

export default function Modal({children}: { children?: ReactNode }) {
    const router = useRouter();
    const goBack = () => {
        router.back()
    }
    return (
        <div className={styles.modal} onClick={goBack}>
            <div className={styles.inner} onClick={event => event.stopPropagation()}>
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </div>
    )
}