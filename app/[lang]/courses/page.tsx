import { Button } from "@/components/shared/button";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionaries";
import { CoursesList } from "@/components/features/course";
import CoursesPageLoader from "@/components/loading/courses/CoursesPageLoader";
import prisma from "@/lib/prisma";

export const revalidate = 10;

async function getCourses() {
    return prisma.course.findMany();
}

interface Props {
    params: { lang: Locale }
}

const Courses = async ({ params }: Props) => {

    const courses = await getCourses();
    const { coursesPage } = await getDictionary(params.lang);

    if (!courses) {
        return <CoursesPageLoader />
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
                noCourses={coursesPage.noCourses} />
            <Button href={"/courses/add"}>{coursesPage.addCourseBtn}</Button>
        </>
    );
}
export default Courses;