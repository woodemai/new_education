import Buttons from "@/components/coursePage/Buttons";
import Lessons from "@/components/coursePage/Lessons";
import CourseInfo from "@/components/coursePage/CourseInfo";

export default function CoursePage({params}: { params: { id: string } }) {
    const {id} = params;
    return (
        <>
            <CourseInfo id={id}/>
            <Lessons id={id}/>
            <Buttons id={id}/>
        </>
    )
}