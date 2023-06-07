import prisma from "@/lib/prisma";


export default async function generateStaticProps(): Promise<void[]> {
    const courses = await prisma.course.findMany();
    return courses.map((course) => {
        course.id
    });
}