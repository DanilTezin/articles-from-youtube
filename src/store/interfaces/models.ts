import { typeColor } from "../../components/UI/Alert/Alert"

export interface ITag{
    text: string
    id?: string
}

export interface ITags{
    tags: ITag[]
}

export interface IArticle{
    id?: string
    author: string
    header: string
    text: string
}


export interface IAlert{
    type: typeColor
    text: string
}