import Button from "@/components/Button";
import {Course} from "@prisma/client";
import CoursesPageLoader from "@/components/loading/courses/CoursesPageLoader";
import {Locale} from "@/i18n-config";
import {getDictionary} from "@/get-dictionaries";
import prisma from "@/lib/prisma";
import CoursesList from "@/components/CoursesList";


export const revalidate = 10;

async function getCourses() {
    return prisma.course.findMany();
}

export default async function Courses({params: {lang}}: { params: { lang: Locale } }) {
    const {coursesPage} = await getDictionary(lang);
    const courses: Course[] = await getCourses();
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
            <CoursesList courses={courses} heading={coursesPage.myCoursesHeading} search={coursesPage.search}
                         noCourses={coursesPage.noCourses}/>
            <Button href={"/courses/add"}>{coursesPage.addCourseBtn}</Button>
        </>
    );
}