import React, {FC} from 'react';
import ReactMarkdown from "react-markdown";
import styles from '../styles/reviews.module.css'

interface ElementProps {
    name: string;
    description: string;
}

const Item: FC<ElementProps> = ({name, description}) => {
    return (
        <div className={styles.item}>
            <div className={styles.item__inner}>
                <h3>Автор: {name}</h3>
                <ReactMarkdown>{description}</ReactMarkdown>
            </div>
        </div>
    );
};

export default Item;