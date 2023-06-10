import {cache} from "react";

export const getLesson = cache((id: string) =>
    fetch(`/api/lesson/${id}`, {
        headers: {"Content-Type": "application/json"},
        method: "GET"
    }).then((res) => res.json())
);