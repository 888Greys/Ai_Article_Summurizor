import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const rapidApiKey = import.meta.env.VITE_RAPID_API_KEY; // import.meta.env.VITE_RAPID_API_KEY is a built-in variable that is available in Vite

export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/' }),

        prepareHeaders: (headers) => {
            headers.set('x-rapidapi-key', rapidApiKey);
            headers.set('x-rapidapi-host', 'article-extractor-and-summarizer.p.rapidapi.com');
            return headers;
        },

    endpoints: (builder) => ({
        getSummary: builder.query({
            query: (params) =>  '/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3',
        })
    })
});

export const { useLazyGetSummaryQuery } = articleApi;
