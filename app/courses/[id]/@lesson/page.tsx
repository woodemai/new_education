'use client'
import {useEffect, useState} from "react";
import List from "@/components/List";
import Item from "@/components/Item";
import CourseLoad from "@/components/loading/CourseLoad";

export interface LessonProps {
    id: string;
    courseId: string;
    title: string;
    body: string;
}

export default function Lessons({params}: { params: { id: string } }) {
    const {id} = params;
    const [lessons, setLessons] = useState<LessonProps[]>();
    useEffect(() => {
        const getLessons = async () => {
            const response = await fetch(`/api/lesson/all/${id}`, {
                method: "GET"
            });
            if (!response.ok) {
                console.error(`Failed to fetch post ${id}`);
                return;
            }
            const data = await response.json();
            setLessons(data);
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
    return <List items={lessons} element={(lesson: LessonProps) => <Item name={lesson.title} description={lesson.body}
                                                                         href={`/courses/${lesson.courseId}/lessons/${lesson.id}`}/>}
                 heading={'Lessons'}/>

}