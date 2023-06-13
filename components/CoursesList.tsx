'use client'
import {useEffect, useState} from "react";
import List from "@/components/List";
import {Course} from "@prisma/client";
import Item from "@/components/Item";
import Input from "@/components/InputC";
import styles from '../styles/utils.module.css'

const renderItem = (course: Course) => {
    return (
        <Item key={course.id} name={course.title} description={course.body}
              href={`courses/${course.id}`}/>
    )
}
export default function CoursesList({courses, heading, search, noCourses}: {
    courses: Course[],
    heading: string,
    search: string
    noCourses: string
}) {
    const [searchValue, setSearchValue] = useState<string>("");
    const [list, setList] = useState(courses);
    useEffect(() => {
        setList([...courses].filter(item => item.title.trim().toLowerCase().includes(searchValue.toLowerCase().trim())))
    }, [searchValue]);
    return (
        <>
            <Input title={search} type="text" onChangeInput={e =>
                setSearchValue(e.target.value)}/>
            {list.length ?
                <List items={list}
                      element={(course: Course) => renderItem(course)} heading={heading}/>
                :
                <h2 className={styles.container}>{noCourses}</h2>
            }
        </>
    )

}