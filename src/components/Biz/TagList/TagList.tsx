import React, { FC } from 'react'
import styles from './taglist.module.css'
import { ITag } from '../../../store/interfaces/models';
import Tag from '../../UI/Tag/Tag';

interface PropsTagList {
    tags: ITag[]
}


const TagList: FC<PropsTagList> = ({tags, ...rest}) =>{
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
