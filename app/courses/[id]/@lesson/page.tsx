'use client'
import {useEffect, useState} from "react";
import List from "@/components/List";
import Item from "@/components/Item";
import {Lesson} from "@prisma/client";
import {getAll} from "@/app/courses/[id]/@lesson/getAll";
import ListLoader from "@/components/loading/reviews/ListLoader";

const renderItem = (lesson: Lesson) => {
    return (
        <Item key={lesson.id} name={lesson.title} description={lesson.body}
              href={`/lesson/${lesson.id}`}/>
    )
}
export default function Lessons({params}: { params: { id: string } }) {
    const {id} = params;
    const [lessons, setLessons] = useState<Lesson[]>();
    useEffect(() => {
        const getLessons = async () => {
            setLessons(await getAll(id))
        }
        if (id) {
            getLessons()
        }
    }, [id]);
    if (!lessons) {
        return <ListLoader/>;
    }
    if (!lessons.length) {
        return <div style={{margin: '10px 0'}}>
            <h3>No lessons were found</h3>
        </div>
    }
    return <List items={lessons} element={(lesson: Lesson) => renderItem(lesson)} heading={'Lessons'}/>

}