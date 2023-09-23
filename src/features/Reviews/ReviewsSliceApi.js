import { ApiSlice } from "../../app/api/apiSlice";


export const reviewApiSlice = ApiSlice.injectEndpoints({
    endpoints: builder => ({
        addReview: builder.mutation({
            query: body => ({
                url: '/review',
                method: 'POST',
                body,
            }),
            
            invalidatesTags: ['reviews']
           
        }),
        updateReview: builder.mutation({
            query: ({id, ...review} ) => ({
                url: `/review/${id}`,
                method: 'PATCH',
                body:review,
            }),
            
            invalidatesTags: ['reviews']
           
        }),
        deleteReview: builder.mutation({
            query: (id)=>({
               url: `/review/${id}`,
               method: 'DELETE'
            }),
           
            providesTags: ['reviews'],
           
        }),
        getReviews: builder.query({
            query: (id)=>({
               url: `/reviews/blog/${id}`
            }),
            
            providesTags: ['reviews'],

        }),
        getAllReviews: builder.query({
            query: ()=>({
               url: `/reviews`
            }),
            
            providesTags: ['reviews'],

        }),

        
    })
})


export const {useAddReviewMutation, useDeleteReviewMutation, useGetReviewsQuery, useUpdateReviewMutation, useGetAllReviewsQuery} = reviewApiSlice