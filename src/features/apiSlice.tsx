import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface post {
    id: Number,
    title: string, 
    description: string
}

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'https://dummyjson.com/'}),
    endpoints: (builder)=>({
        getPosts: builder.query<post[], number>({
            query: (skip) => `/products?limit=10&skip=${skip}`, 
            transformResponse: (response: {products : post[]}) => response.products,
        })
        
    })
})

export const {
    useGetPostsQuery,
} = apiSlice

