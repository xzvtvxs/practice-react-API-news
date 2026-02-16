export interface GetSongsParams {
    page?: number,
    perPage?: number,
    sortField?: string,
    sortOrder?: string,
    title?: string,
    artist?: string,
    genre?: string,
    language?: string,
    label?: string,
    releaseYear?: number,
};

export interface GetSongsResponse {
    page: number,
    perPage: number,
    totalPages: number,
    totalItems: number,
    hasNextPage: boolean,
    hasPreviousPage: boolean,
    items: Song[],
};

export interface Song {
    _id: string,
    title: string,
    artist: string,
    album: string,
    genre: string,
    releaseYear: number,
    durationSeconds: number,
    label: string,
    language: string,
    createdAt: string,
    updatedAt: string,
};

export interface CreateSongBody {
    title?: string,
    artist?: string,
    album?: string,
    genre?: string,
    releaseYear?: number,
    durationSeconds?: number,
    label?: string,
    language?: string,
}

