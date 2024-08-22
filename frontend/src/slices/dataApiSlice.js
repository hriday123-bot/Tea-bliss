import { apiSlice } from "./apiSlice";
import { DATA_URL, TEABAG_URL } from "../constants";

export const dataApiSlice=apiSlice.injectEndpoints({
    endpoints:builder=>({
        getData: builder.query({
            query: () => ({
              url: DATA_URL,
            }),
            keepUnusedDataFor: 5,
          }),

          getDataById: builder.query({
            query:(id)=>({
                url: `${DATA_URL}/${id}`,
            }),
            keepUnusedDataFor:5
          }),

          getTeabags: builder.query({
            query:()=>({
                url: `${TEABAG_URL}`,
            }),
            keepUnusedDataFor:5,
          }),
          getTeabagById: builder.query({
            query:(id)=>({
                url: `${TEABAG_URL}/${id}`,
            }),
            keepUnusedDataFor:5,
          })

        }),
})

export const {useGetDataQuery, useGetDataByIdQuery,useGetTeabagsQuery,useGetTeabagByIdQuery} = dataApiSlice;
