'use client'
import {useEffect, useState} from "react";
import List from "@/components/List";
import Item from "@/components/Item";
import CourseLoad from "@/components/loading/CourseLoad";
import {LessonProps} from "@/lib/interfaces";
import {Lesson} from "@prisma/client";
import {getAll} from "@/app/courses/[id]/@lesson/getAll";

const renderItem = (lesson: Lesson) => {
    return (
        <Item key={lesson.id} name={lesson.title} description={lesson.body}
              href={`/courses/${lesson.courseId}/lessons/${lesson.id}`}/>
    )
}
export default function Lessons({params}: { params: { id: string } }) {
    const {id} = params;
    const [lessons, setLessons] = useState<LessonProps[]>();
    useEffect(() => {
        const getLessons = async () => {
            setLessons(await getAll(id))
        }
        if (id) {
            getLessons()
        }
    }, [id]);
    if (!lessons) {
        return <CourseLoad/>;
    }
    if (!lessons.length) {
        return <div style={{margin: '10px 0'}}>
            <h3>No lessons were found</h3>
        </div>
    }
    return <List items={lessons} element={(lesson: LessonProps) => renderItem(lesson)} heading={'Lessons'}/>

}