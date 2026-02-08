import type { GetNewsParams, GetNewsResponse } from "../types/news";
import { serverAPI } from "./serverConfig";

export async function getNewsList(params:GetNewsParams = {}) {
    const result = await serverAPI.get<GetNewsResponse>('/everything', { params } );

    return result.data;
}