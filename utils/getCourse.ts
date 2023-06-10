import {cache} from "react";

export const getCourse = cache((id: string) =>
    fetch(`/api/course/${id}`, {
        headers: {"Content-Type": "application/json"},
        method: "GET",
    }).then((res) => res.json())
);