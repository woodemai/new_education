'use client'
import { FC, useEffect, useState } from "react";
import { Course } from "@prisma/client";
import { Item } from "@/components/entities/item";
import { Input } from "@/components/shared/input";
import styles from "@/components/shared/list/list.module.css";
import Grid from "@/components/shared/grid/Grid";

const renderItem = (course: Course) => {
    return (
        <Item key={course.id} name={course.title} description={course.body}
            href={`courses/${course.id}`} />
    )
}

interface Props {
    courses: Course[],
    heading: string,
    search: string
    noCourses: string
}

const CoursesList: FC<Props> = ({ courses, heading, search, noCourses }) => {
    const [searchValue, setSearchValue] = useState<string>("");
    const [list, setList] = useState(courses);
    useEffect(() => {
        setList([...courses].filter(item => item.title.trim().toLowerCase().includes(searchValue.toLowerCase().trim())))
    }, [courses, searchValue]);
    return (
        <>
            <Input title={search} type="text" onChangeInput={e =>
                setSearchValue(e.target.value)} />
            {list.length ?
                <Grid items={list}
                    element={(course: Course) => renderItem(course)} heading={heading} />
                :
                <h2 className={styles.container}>{noCourses}</h2>
            }
        </>
    )

}
export default CoursesList;