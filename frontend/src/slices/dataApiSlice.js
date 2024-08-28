import { apiSlice } from "./apiSlice";
import { DATA_URL, TEABAG_URL } from "../constants";

export const dataApiSlice=apiSlice.injectEndpoints({
    endpoints:builder=>({
        getData: builder.query({
            query: () => ({
              url: DATA_URL,
              method: 'GET',
            }),
            keepUnusedDataFor: 5,
          }),

          getDataById: builder.query({
            query:(id)=>({
                url: `${DATA_URL}/${id}`,
                method: 'GET',
            }),
            keepUnusedDataFor:5
          }),
        }),
})

export const {useGetDataQuery, useGetDataByIdQuery} = dataApiSlice;
