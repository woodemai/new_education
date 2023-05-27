import React, {FC} from 'react';
import styles from '../styles/item.module.css'
import ReactMarkdown from "react-markdown";
import Link from "next/link";
export interface ElementProps {
    name: string;
    description: string;
    href: string;
}
const Item:FC<ElementProps> = ({name, description, href}) => {
    return (
        <div className={styles.item}>
            <Link href={href}>
                <h2>{name}</h2>
                <ReactMarkdown>{description}</ReactMarkdown>
            </Link>
        </div>
    );
};

export default Item;