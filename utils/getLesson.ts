import { cache } from "react";
import { Lesson } from "@prisma/client";
import prisma from "@/lib/prisma";

export const getLesson = cache((id: string) =>
  fetch(`/api/lesson/${id}`, {
    headers: { "Content-Type": "application/json" },
    method: "GET",
  })
    .then((res) => res.json())
    .then((res: Lesson) => res)
);

export const getLessonServer = cache(async (id: string) => {
  return prisma.lesson.findUnique({ where: { id } });
});
