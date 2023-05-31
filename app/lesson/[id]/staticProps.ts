
import {Lesson} from "@prisma/client";

export default async function generateStaticProps(): Promise<void[]> {
    const lessons = await fetch(`/api/lesson/all/getAll`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }).then((res) => res.json());
    return lessons.map((lesson:Lesson) => {
         lesson.id
    });
}