import React, { FC } from 'react'
import styles from './taglist.module.css'
import { ITag } from '../../../store/interfaces/models';
import { useAction } from '../../../hooks/actions';
import Tag from '../../UI/Tag/Tag';

interface TagList {
    tags: ITag[]
}



const TagList: FC<TagList> = ({tags, ...rest}) =>{
const {removeFavorite} = useAction()

const deleteTag = (event: React.MouseEvent<HTMLButtonElement>, tag: ITag) =>{
    event.preventDefault()
    removeFavorite(tag)
    console.log(tag.text)
}
    return(
        <div className={styles.content}>
            <p>Список тегов</p>

            <div className={styles.wrappUl}>
                <ul>
                    {tags?.map((tag: ITag, index)=>{
                        return(
                            <Tag key={index} tag={tag}/>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
    
export default TagList
