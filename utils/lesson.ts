import { cache } from "react";
import prisma from "@/lib/prisma";

export const getLesson = cache(async (id: string) => {
  return prisma.lesson.findUnique({ where: { id } });
});

export const deleteLesson = async(id: string) => {
  await prisma.lesson.delete({where: {id}})
}
export const editLesson = async (id: string, title: string, body: string) => {
  await prisma.lesson.update({ where: { id }, data: {title, body} });
};