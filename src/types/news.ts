export type NewsSearchIn = 'title' | 'description' | 'content';

export type NewsLanguage =
  | 'ar' | 'de' | 'en' | 'es' | 'fr' | 'he' | 'it'
  | 'nl' | 'no' | 'pt' | 'ru' | 'sv' | 'ud' | 'zh';

export type NewsSortBy = 'relevancy' | 'popularity' | 'publishedAt';

export interface GetNewsParams {          
  q?: string;
  searchIn?: NewsSearchIn | `${NewsSearchIn},${NewsSearchIn}` | string;
  sources?: string;
  domains?: string;
  excludeDomains?: string;
  from?: string;             
  to?: string;               
  sortBy?: NewsSortBy;
  pageSize?: number;         
  page?: number;
}

export interface GetNewsResponse {
    status: string;
    totalResults: number;
    articles: Articles[];
}

export interface Articles {
    source: {
        id: string;
        name: string;
    }
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}