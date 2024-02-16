import {Lesson} from "@prisma/client";

export default function LessonInfo({lesson}: { lesson: Lesson }) {
    return (
        <>
            <h2>{lesson.title}</h2>
            <p>{lesson.body}</p>
        </>
    )
}