import type { CreateMovieBody, CreateMovieResponse, GetMoviesParams, GetMoviesResponse } from "../types/movies";
import { serverAPI } from "./serverConfig";

export async function getMovies(userParams:GetMoviesParams) {
    const params = {
        ...userParams,
    };

    const result = await serverAPI.get<GetMoviesResponse>('/public/movies', { params });

    return result.data;
}

export async function deleteMovie(movieId:string) { 
    await serverAPI.delete(`/public/movies/${movieId}`);
}

export async function createMovie(movieBody: CreateMovieBody) {
    const result = await serverAPI.post<CreateMovieResponse>('/public/movies', movieBody);

    return result.data.movie
}