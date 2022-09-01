import React, { FC } from 'react'
import { ITag, IKeywords } from '../../../store/interfaces/models';
import styles from './keywords.module.css'


interface PropsKeywords{
    keywords: string
}

const KeywordsList: FC<PropsKeywords> = ({keywords, ...rest}) =>{

    return(
      <div className={styles.content}>
        <p>Список ключевых слов</p>

        <div className={styles.wrappUl}>
            {keywords &&
                <>
                    {keywords}
                </>
            }
        </div>
      </div>

    )
}
    
export default KeywordsList