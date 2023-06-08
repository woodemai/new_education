import styles from "@/styles/utils.module.css";
import Button from "@/components/Button";
import {getDictionary} from "@/get-dictionaries";
import {Locale} from "@/i18n-config";

export default async function NotFound({params}: { params: { lang: Locale } }) {
    const {lang} = params;
    const {notFoundPage} = await getDictionary(lang);
    return (
        <div className={styles.centered}>
            <div className={styles.centeredInner}>
                <h2>404 | {notFoundPage.message}</h2>
                <Button href={"/"}>{notFoundPage.home}</Button>
            </div>
        </div>
    );
}