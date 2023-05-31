import {Course} from "@prisma/client";


export default async function generateStaticProps(): Promise<void[]> {
    const courses = await fetch(`/api/course/courses`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }).then((res) => res.json()).then((res: Course[]) => res);
    return courses.map((course) => {
        course.id
    });
}