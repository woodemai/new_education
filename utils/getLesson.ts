import {cache} from "react";
import {Lesson} from "@prisma/client";

export const getLesson = cache((id: string) =>
    fetch(`/api/lesson/${id}`, {
        headers: {"Content-Type": "application/json"},
        method: "GET"
    }).then((res) => res.json()).then((res: Lesson) => res)
);