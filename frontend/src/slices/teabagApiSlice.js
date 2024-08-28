import { apiSlice } from "./apiSlice";
import { TEABAG_URL } from "../constants.js";

export const  teabgaApiSlice= apiSlice.injectEndpoints({
    endpoints:builder=>({
        getTeabags: builder.query({
            query:()=>({
                url: `${TEABAG_URL}`,
                method: 'GET',
            }),
            keepUnusedDataFor:5,
          }),
          getTeabagById: builder.query({
            query:(id)=>({
                url: `${TEABAG_URL}/${id}`,
                method: 'GET',
            }),
            keepUnusedDataFor:5,
          })

        }),
})

export const {useGetTeabagsQuery, useGetTeabagByIdQuery} = teabgaApiSlice;