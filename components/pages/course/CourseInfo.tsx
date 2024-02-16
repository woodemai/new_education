import { Course } from "@prisma/client";


export default function CourseInfo({ course }: { course: Course }) {
    return (
        <>
            <h2>{course.title}</h2>
            <p>{course.body}</p>
        </>
    )
}