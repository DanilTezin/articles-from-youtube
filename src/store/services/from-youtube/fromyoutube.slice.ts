import { IAlert, IArticle } from './../../interfaces/models';
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ITag, ITags } from '../../interfaces/models';

const SS_TAG_KEY = 'stk'

interface StateProps extends ITags{
    keywords: string
    tags: ITag[]
    countAlert: IAlert[]
    articles: IArticle[],
}

export const initialState: StateProps ={
    keywords: '',
    tags: [],
    countAlert: [],
    articles: [],
}


export const fromyoutubeSlice = createSlice({
    name: 'fromyoutube',
    initialState,
    reducers: {
        addFavorite(state, action: PayloadAction<ITag>){
            if(action.payload.text !== ""){
                state.tags.push(action.payload)
            }
        },
        removeFavorite(state, action: PayloadAction<ITag>){
            state.tags = state.tags.filter(f=> f.text !== action.payload.text)
        },
        addKeywords(state, action: PayloadAction<string>){
            if(action.payload !== ""){
                state.keywords = state.keywords += action.payload
            }else{
                state.keywords = ''
            }
        },
        removeKeyword(state, action: PayloadAction<string>){
            state.keywords = ''
        },
        saveLocalTags(state, action: PayloadAction){
            localStorage.setItem(SS_TAG_KEY, JSON.stringify(state.tags))
        },
        addAlert(state, action: PayloadAction<IAlert>){
            state.countAlert = [...state.countAlert, action.payload]
        },
        removeAlert(state, action: PayloadAction){
            state.countAlert.shift()
        },


    }
})

export const fromyoutubeActions = fromyoutubeSlice.actions
export const fromyoutubeReducer = fromyoutubeSlice.reducer