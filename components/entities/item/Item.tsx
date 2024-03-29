import { FC } from 'react';
import styles from './item.module.css'
import Link from "next/link";

export interface ElementProps {
    name: string;
    description: string;
    href: string,
}

const Item: FC<ElementProps> = ({ name, description, href }) => {
    return (
        <div className={styles.item}>
            <Link href={href}>
                <div className={styles.item__inner}>
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </Link>
        </div>
    );
};

export default Item;