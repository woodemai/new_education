"use client";
import Item from "@/components/Item";
import List from "@/components/List";
import Button from "@/components/Button";
import {Course} from "@prisma/client";
import {useEffect, useState} from "react";
import {getAll} from "@/app/courses/getAll";
const renderItem = (course: Course) => {
    return (
        <Item key={course.id} name={course.title} description={course.body}
              href={`courses/${course.id}`}/>
    )
}
export default function Courses() {
    const [courses, setCourses] = useState<Course[] | null>(null);
    const getCourses = async () => {
        setCourses(await getAll());
    };
    useEffect(() => {
        getCourses()
    }, []);

    if (!courses) {
        return (
            <>
            <h1>Can't find courses :(</h1>
            </>
        );
    }
    if (!courses.length) {
        return (
            <>
                <h3>No courses were found</h3>
                <Button href={"/courses/add"}>Add course</Button>
            </>

        );
    }
    return (
        <>
            <h1>Courses</h1>
            <List items={courses}
                  element={(course: Course) => renderItem(course)} heading={"My courses"}/>
            <Button href={"/courses/add"}>Add course</Button>
        </>
    );
}