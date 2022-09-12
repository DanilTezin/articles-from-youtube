import { configureStore } from "@reduxjs/toolkit";
import { fromyoutubeApi } from "./services/from-youtube/fromyoutube.api";
import { fromyoutubeReducer } from "./services/from-youtube/fromyoutube.slice";

export const store = configureStore({
    reducer:{
        [fromyoutubeApi.reducerPath]: fromyoutubeApi.reducer,
        fromyoutube: fromyoutubeReducer
    },

    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(fromyoutubeApi.middleware)

})

export type RootState = ReturnType<typeof store.getState>