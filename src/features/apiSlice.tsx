import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface post {
    title: string
}

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'https://dummyjson.com/'}),
    endpoints: (builder)=>({
        getPosts: builder.query<post[], void>({
            query: () => `/products`, 
            transformResponse: (response: {products : post[]}) => response.products,
        })
    })
})

export const {
    useGetPostsQuery,
} = apiSlice

