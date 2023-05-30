export interface CourseProps {
    id: string;
    title: string;
    body: string;
}

export interface LessonProps {
    id: string;
    courseId: string;
    title: string;
    body: string;
}

export interface ReviewProps {
    id: string;
    title: string;
    body: string;
    author: string;
}