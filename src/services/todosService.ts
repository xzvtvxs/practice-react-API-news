import type { CreateTodosBody, CreateTodosResponse, GetTodosParams, GetTodosResponse,} from "../types/todos";
import { serverAPI } from "./serverConfig";

export async function getTodos(userParams:GetTodosParams) {

    const params = {
        ...userParams
    }

    const result = await serverAPI.get<GetTodosResponse>('/todos', { params })
    
    return result.data;

}

export async function createTodos(todoBody:CreateTodosBody) {
    const result = await serverAPI.post<CreateTodosResponse>('/todos', todoBody);

    return result.data.todo;
}

export async function deliteTodos(todoId: string) {
    await serverAPI.delete(`/todos/${todoId}`);
}