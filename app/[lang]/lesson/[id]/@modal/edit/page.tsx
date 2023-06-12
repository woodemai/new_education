import Modal from "@/components/modals/Modal";
import CourseLoad from "@/components/loading/CourseLoad";
import EditLessonModal from "@/components/modals/EditLessonModal";
import {getLessonServer} from "@/utils/getLesson";


export default async function EditPage({params: {id}}: { params: { id: string } }) {
    const lesson = await getLessonServer(id);
    if (!lesson) {
        return (
            <Modal>
                <CourseLoad/>
            </Modal>
        )
    }


    return (
        <EditLessonModal less={lesson}/>
    )
}