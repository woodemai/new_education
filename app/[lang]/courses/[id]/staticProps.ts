import prisma from "@/lib/prisma";


export default async function generateStaticProps(): Promise<void[]> {
    const courses = await prisma.course.findMany();
    //     fetch(`/api/course/courses`, {
    //     method: "GET",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    // }).then((res) => res.json()).then((res: Course[]) => res);
    return courses.map((course) => {
        course.id
    });
}