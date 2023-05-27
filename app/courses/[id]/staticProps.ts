import {CourseProps} from "@/lib/interfaces";

export default async function generateStaticProps(): Promise<void[]> {
    const courses = await fetch(`/api/course/courses`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }).then((res) => res.json()).then((res: CourseProps[]) => res);
    return courses.map((course) => {
        course.id
    });
}