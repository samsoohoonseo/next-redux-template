/* 
    this is the overarching project api 
    Access the api via this file.    
*/
import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery } from './baseApi'

// define all tag types here
export const PROJECT_API_ALL_TAGS = ['Users']

export const projectApi = createApi({
    reducerPath: 'projectApi',
    baseQuery: baseQuery,
    tagTypes: PROJECT_API_ALL_TAGS,
    endpoints: () => ({}),
})
