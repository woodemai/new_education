import { ReactNode } from "react";
import styles from './form.module.css'

const Form = ({ children }: { children: ReactNode }) => {

    return (
        <form className={styles.form} method="post">
            {children}
        </form>
    )
}

export default Form;