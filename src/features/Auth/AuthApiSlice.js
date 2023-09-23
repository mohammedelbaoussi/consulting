import { ApiSlice } from "../../app/api/apiSlice";
import { logOut, setCredentials } from "./AuthSlice";

export const authApiSlice = ApiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: body => ({
                url: '/login',
                method: 'POST',
                body,
            }),
            
            invalidatesTags: ['users']
           
        }),
        register: builder.mutation({
            query: body => ({
                url: '/register',
                method: 'POST',
                body,
            }),
            
            invalidatesTags: ['users']
           
        }),
        logout: builder.query({
            query: ()=>({
               url: '/logout'
            }),
           
            providesTags: ['users'],
            async onQueryStarted(arg, {dispatch, queryFulfilled}){
                dispatch(logOut())
              
            }
        }),
        refreshtoken: builder.query({
            query: ()=>({
               url: '/refreshtoken'
            }),
            
            providesTags: ['users'],
            async onQueryStarted(arg , {dispatch, queryFulfilled}){
                    try{
                        const {data} = await queryFulfilled
                        const accessToken = data?.access_token
                        const user = data?.user
                        dispatch(setCredentials({accessToken, user}))
                        
                    } catch(err){
                        return
                    }  
            }
        }),
        getAllUsers: builder.query({
            query: ()=>({
               url: '/allusers'
            }),
            
            providesTags: ['users'],

        }),
        getUser: builder.query({
            query: (id)=>({
               url: `/userDetails/${id}`
            }),
           
            providesTags: ['user'],
            
        }),
        updateUserRole: builder.mutation({
            query: ({id, role }) => ({
                url: `/updateRoleUser/${id}`,
                method: 'PUT',
                body: role,
            }),
            
            invalidatesTags: ['users']
           
        }),
        
    })
})


export const {useLoginMutation, useRegisterMutation, useLogoutQuery, useRefreshtokenQuery, useGetAllUsersQuery, useGetUserQuery, useUpdateUserRoleMutation} = authApiSlice