import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const options = {
	method: 'GET',
	hostname: 'article-extractor-and-summarizer.p.rapidapi.com',
	port: null,
	path: '/summarize?url=https%3A%2F%2Ftime.com%2F6266679%2Fmusk-ai-open-letter%2F&lang=en&engine=2',
	headers: {
		'x-rapidapi-key': '732bb505bdmsh09f3675df2fe505p173669jsnc04cf1eb8e27',
		'x-rapidapi-host': 'article-extractor-and-summarizer.p.rapidapi.com'
	}
};

export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/' }),

        prepareHeaders: () => {
            headers.set('x-rapidapi-key', 'KEY');
            headers.set('x-rapidapi-host', 'article-extractor-and-summarizer.p.rapidapi.com');
        },

    endpoints: (builder) => ({
        getSummary: builder.query({
            query: (params) =>  'test'
        })
    })
})
