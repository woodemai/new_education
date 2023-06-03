import styles from "@/styles/utils.module.css";
import Button from "@/components/Button";

export default function NotFound() {
    return (
        <div className={styles.centered}>
            <div className={styles.centeredInner}>
                <h2>404 | This page not found</h2>
                <Button href={'/'}>Home</Button>
            </div>
        </div>
    )
}