export interface GetMoviesParams {
    page?: number,
    perPage?: number,
    sortField?: string,
    sortOrder?: string,
    title?: string,
    director?: string,
    genre?: string,
    language?: string,
    releaseYear?: number,
    rating?: number,
};

export interface GetMoviesResponse {
    page: number,
    perPage: number,
    totalPages: number,
    totalItems: number,
    hasNextPage: boolean,
    hasPreviousPage: boolean
    items: Movie[],
};

export interface Movie { 
    _id: string,
    title: string,
    director: string,
    genre: string,
    releaseYear: number,
    rating: number,
    durationMinutes: number,
    language: string,
    summary: string,
    createdAt: string,
    updatedAt: string,
};

export interface CreateMovieBody {
    title: string,
    director: string,
    genre: string,
    releaseYear: number,
    rating: number,
    durationMinutes: number,
    language: string,
    summary: string,
}

export interface CreateMovieResponse {
    movie: Movie,
}