import React, {FC, ReactNode} from 'react';
import styles from '../styles/list.module.css';
interface ListProps<T> {
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