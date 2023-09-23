import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_BACK_END_URL}/api/`,
    credentials: 'include',
    withCredentials: true,

    prepareHeaders: (headers, {getState})=>{
        const token = getState().Auth?.token
        headers.set('authorization', token? 'Bearer ' + token: '')

        return headers
    }
})


export const ApiSlice = createApi({
    reducerPath: 'ApiSlice',
    baseQuery,
    tagTypes: ['users', 'blogs', 'consultation', 'categories'],
    endpoints: (builder) => ({})
})