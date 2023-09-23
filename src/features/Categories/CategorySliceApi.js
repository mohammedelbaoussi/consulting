import { ApiSlice } from "../../app/api/apiSlice";


export const categoryApiSlice = ApiSlice.injectEndpoints({
    endpoints: builder => ({
        addCategory: builder.mutation({
            query: body => ({
                url: '/category/addcategory',
                method: 'POST',
                body,
            }),
            
            invalidatesTags: ['categories']
           
        }),
        updateCategory: builder.mutation({
            query: ({id, ...category} ) => ({
                url: `/category/updatecategory/${id}`,
                method: 'PUT',
                body:category,
            }),
            
            invalidatesTags: ['categories']
           
        }),
        deleteCategory: builder.mutation({
            query: (id)=>({
               url: `/category/deletecategory/${id}`,
               method: 'DELETE'
            }),
           
            providesTags: ['categories'],
           
        }),
        getCategory: builder.query({
            query: (id)=>({
               url: `/category/getcategory/${id}`
            }),
           
            providesTags: ['categories'],
            
        }),
        getCategories: builder.query({
            query: ()=>({
               url: '/category/getcategory'
            }),
            
            providesTags: ['categories'],

        }),

        
    })
})


export const {useAddCategoryMutation, useDeleteCategoryMutation, useGetCategoriesQuery, useGetCategoryQuery, useUpdateCategoryMutation } = categoryApiSlice