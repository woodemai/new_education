import styles from '../styles/utils.module.css'
import React, {
    ChangeEvent
} from "react";

interface InputProps {
    title: string;
    type: 'text' | 'password' | 'number';
    defaultValue?: string;
    isArea?: boolean;
    onChangeInput?: (e: ChangeEvent<HTMLInputElement>) => void;
    onChangeArea?: (e: ChangeEvent<HTMLTextAreaElement>) => void

}

export default function Input({title, type, defaultValue, isArea, onChangeArea, onChangeInput}: InputProps) {
    const id = title.trim().toLowerCase();
    if (isArea) {
        return (
            <div className={styles.input}>
                <label htmlFor={id}>{title}</label>
                <textarea id={id} onChange={onChangeArea} defaultValue={defaultValue}/>
            </div>
        )
    }
    return (
        <div className={styles.input}>
            <label htmlFor={id}>{title}</label>
            <input type={type} id={id} defaultValue={defaultValue}
                   onChange={onChangeInput}/>
        </div>
    )
}