import { ApiSlice } from "../../app/api/apiSlice";


export const blogApiSlice = ApiSlice.injectEndpoints({
    endpoints: builder => ({
        createBlog: builder.mutation({
            query: body => ({
                url: '/addblog',
                method: 'POST',
                body,
            }),
            
            invalidatesTags: ['blogs']
           
        }),
        updateBlog: builder.mutation({
            query: ({id, ...newData} ) => ({
                url: `/updateblog/${id}`,
                method: 'PUT',
                body: newData,
            }),
            
            invalidatesTags: ['blogs']
           
        }),
        deleteBlog: builder.mutation({
            query: (id)=>({
               url: `/deleteblog/${id}`,
               method: 'DELETE'
            }),
           
            providesTags: ['blogs'],
           
        }),
        getBlog: builder.query({
            query: (id)=>({
               url: `/blog/${id}`
            }),
           
            providesTags: ['blogs'],
            
        }),
        getBlogs: builder.query({
            query: ()=>({
               url: '/blogs'
            }),
            
            providesTags: ['blogs'],

        }),
        getHomeBlogs: builder.query({
            query: ()=>({
               url: '/homeblogs'
            }),
            
            providesTags: ['blogs'],

        }),
        getBlogByCategory: builder.query({
            query: (id)=>({
               url: `/blogs/category/${id}`
            }),
            
            providesTags: ['blogs'],

        })
        
    })
})


export const {useCreateBlogMutation,useUpdateBlogMutation, useDeleteBlogMutation, useGetBlogByCategoryQuery, useGetBlogQuery, useGetBlogsQuery, useGetHomeBlogsQuery} = blogApiSlice