import React, {FC} from 'react';
import ReactMarkdown from "react-markdown";
import styles from '../styles/reviews.module.css'

interface ElementProps {
    author: string
    name: string;
    description: string;
}

const Item: FC<ElementProps> = ({author, name, description}) => {
    return (
        <div className={styles.item}>
            <div className={styles.item__inner}>
                <h3>{name}</h3>
                <ReactMarkdown>{description}</ReactMarkdown>
                <ReactMarkdown className={styles.author}>{author}</ReactMarkdown>
            </div>
        </div>
    );
};

export default Item;