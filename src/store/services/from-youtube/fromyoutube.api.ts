import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface ILink{
    link: string
}

export const fromyoutubeApi = createApi({

    reducerPath: 'youtube/api',

    baseQuery: fetchBaseQuery({
        baseUrl: 'http://192.168.0.11:8000',
        mode: "cors",
        prepareHeaders: (headers: any) => {
            headers.set('Access-Control-Allow-Origin', '*');
            headers.set('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
            headers.set('Access-Control-Allow-Headers', 'Content-Type');
            return headers 
        }
    }),

    
    

    endpoints: (builder)=>({

        linkArticle: builder.mutation<ILink, any>({
            
            query: (link: string) =>({
                url: 'generate_articles_by_link',
                params:{
                    link: link
                },
                method: "POST",
                mode: 'no-cors'
            }),
            // transformResponse: (response: ) => response.items
        }),

        
    })

})

export const {useLinkArticleMutation} = fromyoutubeApi