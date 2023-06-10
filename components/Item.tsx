import React, {FC, ReactNode} from 'react';
import styles from '../styles/item.module.css'
import ReactMarkdown from "react-markdown";
import Link from "next/link";

export interface ElementProps {
    name: string;
    description: string;
    href: string,
}

const Item: FC<ElementProps> = ({name, description, href}) => {
    return (
        <div className={styles.item}>
            <Link href={href}>
                <div className={styles.item__inner}>
                    <h2>{name}</h2>
                    <ReactMarkdown>{description}</ReactMarkdown>
                </div>
            </Link>
        </div>
    );
};

export default Item;