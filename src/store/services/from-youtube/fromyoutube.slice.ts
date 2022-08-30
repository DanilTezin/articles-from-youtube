import { createSlice } from "@reduxjs/toolkit"
import { ITags } from "../../interfaces/models"



export const initialState: ITags ={
   tags: []
}

export const fromyoutubeSlice = createSlice({
    name: 'fromyoutube',
    initialState,
    reducers: {}
})