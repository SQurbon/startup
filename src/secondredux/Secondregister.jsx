import {
    createApi,
    fetchBaseQuery
  } from "@reduxjs/toolkit/query/react";
  
  export const secondregisterApi = createApi({
    reducerPath: "tasksApi",
    baseQuery: fetchBaseQuery({
      baseUrl: "http://localhost:9000/"
    }),

    endpoints: (builder) => ({
        secondregisters: builder.query({
          query: () => "/secondregisters"
        }),
        addSecondRegister: builder.mutation({
          query: (task) => ({
            url: "/secondregisters",
            method: "POST",
            body: task
          })
        }),
        updateSecondRegister: builder.mutation({
          query: ({ id, ...rest }) => ({
            url: `/secondregisters/${id}`,
            method: "PUT",
            body: rest
          })
        }),
        deleteSecondRegister: builder.mutation({
          query: (id) => ({
            url: `/secondregisters/${id}`,
            method: "DELETE"
          })
        })
      })
  });


  
  export const {
    useSecondregistersQuery,
    useAddSecondRegisterMutation,
    useUpdateSecondRegisterMutation,
    useDeleteSecondRegisterMutation
  } = secondregisterApi;
  