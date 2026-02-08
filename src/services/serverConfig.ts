import axios from "axios";

const API_KEY = "c1308fb584ee484b8ef59431efc7ee1f";

export const serverAPI = axios.create({
    baseURL: "https://newsapi.org/v2",
})