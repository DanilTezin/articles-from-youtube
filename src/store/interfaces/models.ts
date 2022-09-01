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
