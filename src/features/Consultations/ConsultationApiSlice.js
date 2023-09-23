import { ApiSlice } from "../../app/api/apiSlice";


export const consultationApiSlice = ApiSlice.injectEndpoints({
    endpoints: builder => ({
        addConsultation: builder.mutation({
            query: body => ({
                url: '/addconsultation',
                method: 'POST',
                body,
            }),
            
            invalidatesTags: ['consultation']
           
        }),

        getConsultation: builder.query({
            query: (id)=>({
               url: `/getconsultation/${id}`
            }),
           
            providesTags: ['consultation'],
            
        }),
        getConsultations: builder.query({
            query: ()=>({
               url: '/getconsultations'
            }),
            
            providesTags: ['consultation'],

        }),
        updateConsultationPaid: builder.mutation({
            query: ({id, ...paid} ) => ({
                url: `/updatePaid/${id}`,
                method: 'PUT',
                body: paid,
            }),
            
            invalidatesTags: ['consultation']
           
        }),
        updateConsultationAnswered: builder.mutation({
            query: ({id, ...answered }) => ({
                url: `/updateAnswered/${id}`,
                method: 'PUT',
                body: answered,
            }),
            
            invalidatesTags: ['consultation']
           
        }),
        deleteConsultation: builder.mutation({
            query: (id)=>({
               url: `/deleteConsultation/${id}`,
               method: 'DELETE'
            }),
           
            providesTags: ['consultation'],
           
        }),
        
    })
})


export const {useAddConsultationMutation, useGetConsultationQuery, useGetConsultationsQuery, useUpdateConsultationAnsweredMutation, useUpdateConsultationPaidMutation, useDeleteConsultationMutation } = consultationApiSlice