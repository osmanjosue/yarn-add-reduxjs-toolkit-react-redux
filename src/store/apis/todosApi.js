import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todosApi = createApi({

    reducerPath: 'todos',

    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com'
    }),

    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => '/todos'
        })
    })

});

export const { useGetTodosQuery } = todosApi; //es useGetTodos por la linea 12 y query porque es una petición get
//si fuera post, put o delete seria 'useGetTodosMutation'