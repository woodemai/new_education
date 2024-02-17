import React, {FC, ReactNode, memo} from 'react';
import styles from './list.module.css';

interface ListProps<T extends {id: string}> {
    items: T[],
    element: (item: T) => ReactNode
    heading: string,
}

const List:FC<ListProps<any>> = memo(function List({items, element, heading}) {

    if(items.length) {
        return (
            <ul className={styles.list}>
                <h2>{heading}</h2>
                {items.map(element)}
            </ul>
        );
    }
})

export default List;