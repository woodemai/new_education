import Item from "@/components/Item";
import List from "@/components/List";
import prisma from "@/lib/prisma";
import Button from "@/components/Button";
import {Course} from "@prisma/client";

async function getCourses ():Promise<Course[]> {
    return prisma.course.findMany({orderBy: {
        title: 'desc'
        }});
}
export default async function Courses () {
    const courses = await getCourses();
    if (!courses.length) {
        return (
            <h3>No courses were found</h3>
        )
    }
    return (
        <>
            <h1>Courses</h1>
            <List items={courses}
                  element={(course) => <Item key={course.id} name={course.title} description={course.body}
                                             href={`courses/${course.id}`}/>} heading={'My courses'}/>
            <Button href={'/courses/add'}>Add course</Button>
        </>
    )
}