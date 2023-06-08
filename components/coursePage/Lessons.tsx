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
const getLessons = cache((courseId: string) =>
    fetch(`/api/lesson/byCourseId/${courseId}`, {
        headers: {"Content-Type": "application/json"},
        method: "GET"
    }).then((res) => res.json())
);
export default function Lessons({id, dictionary}: {
    id: string, dictionary: {
        title: string,
        noLessons: string,
    }
}) {
    const lessons = use<Lesson[]>(getLessons(id));
    if (!lessons) {
        return <ListLoader/>;
    }
    if (!lessons.length) {
        return (
            <div style={{margin: '10px 0'}}>
                <h3>{dictionary.noLessons}</h3>
            </div>
        )
    }
    return <List items={lessons} element={(lesson: Lesson) => renderItem(lesson)} heading={dictionary.title}/>
}