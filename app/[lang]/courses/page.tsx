import Item from "@/components/Item";
import List from "@/components/List";
import Button from "@/components/Button";
import {Course} from "@prisma/client";
import CoursesPageLoader from "@/components/loading/courses/CoursesPageLoader";
import {Locale} from "@/i18n-config";
import {getDictionary} from "@/get-dictionaries";
import prisma from "@/lib/prisma";

export const revalidate = 0;
const renderItem = (course: Course) => {
    return (
        <Item key={course.id} name={course.title} description={course.body}
              href={`courses/${course.id}`}/>
    )
}
export default async function Courses({params: {lang}}: { params: { lang: Locale } }) {
    const {coursesPage} = await getDictionary(lang);
    const courses = await prisma.course.findMany()
    if (!courses) {
        return <CoursesPageLoader/>
    }
    if (!courses.length) {
        return (
            <>
                <h3>{coursesPage.noCourses}</h3>
                <Button href={"/courses/add"}>{coursesPage.addCourseBtn}</Button>
            </>

        );
    }
    return (
        <>
            <h1>{coursesPage.heading}</h1>
            <List items={courses}
                  element={(course: Course) => renderItem(course)} heading={coursesPage.myCoursesHeading}/>
            <Button href={"/courses/add"}>{coursesPage.addCourseBtn}</Button>
        </>
    );
}