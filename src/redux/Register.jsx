import {
    createApi,
    fetchBaseQuery
  } from "@reduxjs/toolkit/query/react";
  
  export const registerApi = createApi({
    reducerPath: "tasksApi",
    baseQuery: fetchBaseQuery({
      baseUrl: "http://localhost:9000/"
    }),

    endpoints: (builder) => ({
        register: builder.query({
          query: () => "/register"
        }),
        addRegisters: builder.mutation({
          query: (task) => ({
            url: "/register",
            method: "POST",
            body: task
          })
        }),
        updateRegisters: builder.mutation({
          query: ({ id, ...rest }) => ({
            url: `/register/${id}`,
            method: "PUT",
            body: rest
          })
        }),
        deleteRegisters: builder.mutation({
          query: (id) => ({
            url: `/register/${id}`,
            method: "DELETE"
          })
        })
      })
  });


  
  export const {
    useRegisterQuery,
    useAddRegistersMutation,
    useUpdateRegistersMutation,
    useDeleteRegistersMutation
  } = registerApi;
  