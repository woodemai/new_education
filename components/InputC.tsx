import styles from '../styles/utils.module.css'
import React, {
    ChangeEvent,
    Dispatch,
    SetStateAction,
    useEffect,
    useState
} from "react";

interface InputProps {
    title: string;
    type: 'text' | 'password' | 'number';
    defaultValue?: string;
    isArea?: boolean;
    setValue: Dispatch<SetStateAction<string>>;
}

export default function Input(props: InputProps) {
    const id = props.title.trim().toLowerCase();
    const [value, setValue] = useState<string>("");

    useEffect(() => {
        props.setValue(value)
    }, [value]);
    if (props.isArea) {
        return (
            <div className={styles.input}>
                <label htmlFor={id}>{props.title}</label>
                <textarea id={id}
                          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)}>{props.defaultValue}</textarea>
            </div>
        )
    }
    return (
        <div className={styles.input}>
            <label htmlFor={id}>{props.title}</label>
            <input type={props.type} id={id} defaultValue={props.defaultValue}
                   onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}/>
        </div>
    )
}