import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { fromyoutubeActions } from "../store/services/from-youtube/fromyoutube.slice";

const actions ={
    ...fromyoutubeActions
}

export const useAction = () =>{
    const dispatch = useDispatch()
    return bindActionCreators(actions, dispatch)
}