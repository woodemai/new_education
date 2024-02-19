import { FC, ReactNode } from "react"
import styles from './grid.module.css'
import clsx from "clsx"

interface Props<T> {
    rows?: number
    cols?: number
    items: T[]
    element: (item: T) => ReactNode
    heading: string,
}

const Grid:FC<Props<any>> = ({rows = 4, cols, items, element, heading}) => {

    return (
        <div className={clsx(styles.grid)}>
            {items.map(element)}
        </div>
    )
}

export default Grid;