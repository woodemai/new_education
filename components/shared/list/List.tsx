import React, {FC, ReactNode} from 'react';
import styles from './list.module.css';

interface ListProps<T extends {id: string}> {
    items: T[],
    element: (item: T) => ReactNode
    heading: string,
}

const List:FC<ListProps<any>> = ({items, element, heading}) => {
    return (
        <div className={styles.list}>
            <h2>{heading}</h2>
            {items.map(element)}
        </div>
    );
};

export default List;