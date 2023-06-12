import {cache} from "react";
import prisma from "@/lib/prisma";

export const getCourse = cache((id: string) =>
    prisma.course.findUnique({where: {id}})
);