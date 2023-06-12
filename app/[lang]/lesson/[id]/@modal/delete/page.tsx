import Modal from "@/components/modals/Modal";
import CourseLoad from "@/components/loading/CourseLoad";
import {getLessonServer} from "@/utils/getLesson";
import DeleteLessonModal from "@/components/modals/DeleteLessonModal";


export default async function EditPage({params: {id}}: { params: { id: string } }) {
    const lesson = await getLessonServer(id);
    if (!lesson) {
        return (
            <Modal>
                <CourseLoad/>
            </Modal>
        )
    }
    return <DeleteLessonModal lesson={lesson}/>
}