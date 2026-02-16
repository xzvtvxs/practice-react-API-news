export interface GetLessonsParams { 
    page?: number,
    perPage?: number,
    sortField?: string,
    sortOrder?: string,
    title?: string,
    subject?: string,
    level?: string,
    teacher?: string,
    durationMinutes?: number,
};

export interface GetLessonsResponse { 
    page: number,
    perPage: number,
    totalPages: number,
    totalItems: number,
    hasNextPage: boolean,
    hasPreviousPage: boolean,
    items: Item[],
};

export interface Item { 
    _id: string,
    title: string,
    subject: string,
    level: string,
    teacher: string,
    durationMinutes: number,
    publishedAt: string,
    summary: string,
    createdAt: string,
    updatedAt: string,
};

export interface CreateLessonsParams { 
    title: string,
    subject: string,
    level: string,
    teacher: string,
    durationMinutes: number,
    publishedAt: string,
    summary: string
};


