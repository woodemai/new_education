import styles from './input.module.css'
import { ChangeEvent, FC, useId } from "react";

interface InputProps {
    title?: string;
    type: 'text' | 'password' | 'number';
    defaultValue?: string;
    isArea?: boolean;
    onChangeInput?: (e: ChangeEvent<HTMLInputElement>) => void;
    onChangeArea?: (e: ChangeEvent<HTMLTextAreaElement>) => void

}

const Input: FC<InputProps> = ({ title, type, defaultValue, isArea, onChangeArea, onChangeInput }) => {
    const id = useId();
    if (isArea) {
        return (
            <div className={styles.input}>
                <label htmlFor={id}>{title}</label>
                <textarea id={id} onChange={onChangeArea} defaultValue={defaultValue} />
            </div>
        )
    }
    return (
        <div className={styles.input}>
            <label htmlFor={id}>{title}</label>
            <input type={type} id={id} defaultValue={defaultValue}
                onChange={onChangeInput} />
        </div>
    )
}
export default Input