import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ITag, ITags } from '../../interfaces/models';

const SS_TAG_KEY = 'stk'

interface StateProps extends ITags{
    tags: Array<ITag>
    keywords: string
}




export const initialState: StateProps ={
    tags: [],
    keywords: ''
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
        },
        addKeywords(state, action: PayloadAction<string>){
            state.keywords = state.keywords += action.payload
        },
        removeKeyword(state, action: PayloadAction<string>){
            state.keywords = ''
        },
        saveLocalTags(state, action: PayloadAction){
            localStorage.setItem(SS_TAG_KEY, JSON.stringify(state.tags))
        }
    }
})

export const fromyoutubeActions = fromyoutubeSlice.actions
export const fromyoutubeReducer = fromyoutubeSlice.reducer