import type { GetNewsParams, GetNewsResponse } from "../types/news";
import { serverAPI } from "./serverConfig";

// export async function getNewsList(query: string, domains?: string,
//     excludeDomains?: string, to?: string, language?: string) {

//     const headers = {
//         "X-Api-Key": 'c1308fb584ee484b8ef59431efc7ee1f',
//     };

//     const params = {
//         q: query,
//         domains: domains,
//         excludeDomains: excludeDomains,
//         to: to,
//         language: language,
//     };

//     const result = await serverAPI.get<GetNewsResponse>('/everything', { headers, params } );



//     return result.data;
// }

// getNewsList("Bitcoin", undefined, undefined, undefined, "en");


export async function getNews(userParams:GetNewsParams ) {
    const params = {
        language: "en",
        apiKey: "c1308fb584ee484b8ef59431efc7ee1f",
        ...userParams
    };

    const result = await serverAPI.get<GetNewsResponse>('/everything', { params });
    
    return result.data;
}

getNews({
    q: "Bitcoin",
    page: 1,
    pageSize: 10
})
