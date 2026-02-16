import type { CreateSongBody, GetSongsParams, GetSongsResponse, Song } from "../types/songs";
import { serverAPI } from "./serverConfig";

export async function getSongs(userParams:GetSongsParams) {
    const params = {
        ...userParams,
    }

    const result = await serverAPI.get<GetSongsResponse>('/public/songs', { params })
    
    return result.data;
}

export async function createSong(songBody:CreateSongBody)  {
    const result = await serverAPI.post<{
        item: Song
    }>('/public/songs', songBody);

    return result.data;
}

export async function deleteSong(songId: string) {
    await serverAPI.delete(`/public/songs/${songId}`);
}