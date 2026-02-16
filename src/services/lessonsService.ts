import type { CreateLessonsParams, GetLessonsParams, GetLessonsResponse, Item } from "../types/lessons";
import { serverAPI } from "./serverConfig";

export async function getLessons(userParams: GetLessonsParams) {
    
    const params = {
        ...userParams,
    };

    const result = await serverAPI.get<GetLessonsResponse>('/public/lessons', { params })
    
    return result.data;
}

export async function createLessons(lessonBody:CreateLessonsParams) {
    const result = await serverAPI.post<Item>('/public/lessons', lessonBody);

    return result.data;
}

export async function deleteLessons(lessonId: string) {
    await serverAPI.delete(`/public/lessons${lessonId}`);
}