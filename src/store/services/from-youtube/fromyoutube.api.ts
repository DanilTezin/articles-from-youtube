import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ITag } from '../../interfaces/models'

export const fromyoutubeApi = createApi({
    reducerPath: '',

    baseQuery: fetchBaseQuery({
        baseUrl: ''
    }),
    
    endpoints: (builder)=>({
        postFromyoutube: builder.query<ITag[], any>({
            query: (tags: []) =>({
                url: '',
                params:{
                    q:tags
                }
            }),
            // transformResponse: (response: ) => response.items

        })
    })

})

export const {useLazyPostFromyoutubeQuery, usePostFromyoutubeQuery} = fromyoutubeApi