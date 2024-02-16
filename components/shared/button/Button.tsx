import { FC, ReactNode } from "react";
import styles from './button.module.css'
import Link from "next/link";
import clsx from "clsx";

interface ButtonProps {
    children: ReactNode;
    href?: string;
    type?: 'submit' | 'button' | 'reset';
    variant?: 'primary' | 'secondary' | 'destructive' | 'link'
    onClick?: () => void;
}
const Button: FC<ButtonProps> = ({ children, href, type = 'button', variant = 'primary', onClick }) => {
    if (href) {
        return (
            <Link className=
                {clsx(styles.button,
                    variant === 'primary' && styles.primary,
                    variant === 'secondary' && styles.secondary,
                    variant === 'destructive' && styles.destructive,
                    variant === 'link' && styles.link,
                )} href={href}>{children}</Link>
        )
    }
    return (
        <button onClick={onClick} type={type} className=
            {clsx(styles.button,
                variant === 'primary' && styles.primary,
                variant === 'secondary' && styles.secondary,
                variant === 'destructive' && styles.destructive,
                variant === 'link' && styles.link,
            )}>
            {children}
        </button>
    );
};

export default Button;