import { memo } from "react";
import styles from './app-description.module.css'

interface Props {
    heading: string,
    body: string
}

const AppDescription = memo(function AppDescription({ heading, body }: Props) {

    return (
        <section className={styles.description}>
            <h1>{heading}</h1>
            <p>{body}</p>
        </section>
    )
})

export default AppDescription;