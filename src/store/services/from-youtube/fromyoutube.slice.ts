import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ITag, ITags } from "../../interfaces/models"

const SS_TAG_KEY = 'stk'

export const initialState: ITags ={
   tags: []
}

export const fromyoutubeSlice = createSlice({
    name: 'fromyoutube',
    initialState,
    reducers: {
        addFavorite(state, action: PayloadAction<ITag>){
            state.tags.push(action.payload)
        },
        removeFavorite(state, action: PayloadAction<ITag>){
            state.tags = state.tags.filter(f=> f.text !== action.payload.text)
        }
    }
})

export const fromyoutubeActions = fromyoutubeSlice.actions
export const fromyoutubeReducer = fromyoutubeSlice.reducer