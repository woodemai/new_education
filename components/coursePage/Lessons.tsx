'use client'
import {Lesson} from "@prisma/client";
import Item from "@/components/Item";
import {cache, use} from "react";
import ListLoader from "@/components/loading/reviews/ListLoader";
import List from "@/components/List";

const renderItem = (lesson: Lesson) => {
    return (
        <Item key={lesson.id} name={lesson.title} description={lesson.body}
              href={`/lesson/${lesson.id}`}/>
    )
}
const getLessons = cache((id: string) =>
    fetch(`/api/lesson/byCourseId/${id}`, {
        headers: {"Content-Type": "application/json"},
        method: "GET"
    }).then((res) => res.json())
);
export default function Lessons({id}: { id: string }) {
    const lessons = use<Lesson[]>(getLessons(id));
    if (!lessons) {
        return <ListLoader/>;
    }
    if (!lessons.length) {
        return (
            <div style={{margin: '10px 0'}}>
                <h3>No lessons were found</h3>
            </div>
        )
    }
    return <List items={lessons} element={(lesson: Lesson) => renderItem(lesson)} heading={'Lessons'}/>
}