import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ITag } from '../../interfaces/models'

export const fromyoutubeApi = createApi({
    reducerPath: '',

    baseQuery: fetchBaseQuery({
        baseUrl: ''
    }),
    
    endpoints: (builder)=>({

        postTags: builder.query<ITag[], any>({
            query: (tags: []) =>({
                url: '',
                params:{
                    q:tags
                }
            }),
            // transformResponse: (response: ) => response.items
        }),

        postKeywords: builder.query<string, any>({
            query: (keywords: string)=>({
                url: '',
                params:{
                    q:keywords
                }
            })
        }),
        
    })

})

export const {usePostTagsQuery, useLazyPostTagsQuery, useLazyPostKeywordsQuery, usePostKeywordsQuery} = fromyoutubeApi