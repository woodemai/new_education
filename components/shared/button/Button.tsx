import { FC, ReactNode } from "react";
import styles from './button.module.css'
import Link from "next/link";

interface ButtonProps {
    children: ReactNode;
    href?: string;
    type?: 'submit' | 'button' | 'reset';
    onClick?: () => void;
}
const Button: FC<ButtonProps> = (props) => {
    if (props.href !== undefined) {
        return (
            <Link className={styles.button} href={props.href}>{props.children}</Link>
        )
    }
    return (
        <button onClick={props.onClick} type={props.type} className={styles.button}>
            {props.children}
        </button>
    );
};

export default Button;