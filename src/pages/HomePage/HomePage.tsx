import React, { ChangeEvent, useState } from 'react'
import { useAction } from '../../hooks/actions';
import { ITag } from '../../store/interfaces/models';
import { useAppSelector } from '../../hooks/redux';
import styles from './homepage.module.css'
import TagList from '../../components/Biz/TagList/TagList'
import Button from '../../components/UI/Button/Buttom'
import Input from '../../components/UI/Input/Input'
import KeywordsList from '../../components/Biz/KeywordsList/KeywordsList'
import Paragraph from '../../components/UI/Paragraph/Paragraph';
import Alert from '../../components/UI/Alert/Alert';



const HomePage = () =>{

    const {addFavorite, addKeywords, removeKeyword, saveLocalTags, addAlert} = useAction()
    const {tags, keywords, countAlert} = useAppSelector(state => state.fromyoutube)

    const [keyword, setKeywords] = useState<string>('')
    const [tag, setTag] = useState<ITag>({text: ''})

    const handleInputTag = (event: ChangeEvent<HTMLInputElement>) => setTag({text: event.target.value})
    const handleInputKeywords = (event: ChangeEvent<HTMLInputElement>) => setKeywords(event.target.value)


    const deleteKeyword = ()=> removeKeyword('')
    const localSaveTag = ()=> saveLocalTags()

  

    const addTag = ()=>{
        addFavorite(tag)
        setTag({text: ''})
    }   

    const addKeyword = ()=>{
        addKeywords(keyword)
        setKeywords('')
    }

    const pushData =() =>{
        addAlert( tags.length === 0 || keywords === '' ?
            {   
                type: 'error',
                text: 'Не все данные заполнены'
            } : 
            {   
                type: 'success',
                text: 'Отправка на сервер'
            }
            )
    }

    return(   
        <div className={styles.content}>

            <section>
                <Input onChange={handleInputTag} value={tag.text} name='tag' label='Имя тега'/>
                <div className={styles.wrapBtn}>
                    <Button onClick={addTag} color='red' name='pushtag' text='Добавить тег'/>
                    <Button onClick={localSaveTag} color='red' name='pushtag' text='Сохранить локально'/>
                </div>
                <TagList tags={tags}/>
                <Paragraph header='Пример - ' text='"Дом"'/>
            </section>

            <section>
                <Input onChange={handleInputKeywords} value={keyword} name='tag' label='Ключивые слова'/>
                <div className={styles.wrapBtn}>
                    <Button onClick={addKeyword} color='red' name='pushtag' text='Добавить список'/>
                    <Button onClick={deleteKeyword} color='red' name='pushtag' text='Отчистить список'/>
                </div>
                <KeywordsList keywords={keywords}/>
                <Paragraph header='Пример - ' text='"Постройка, кирпич, цемент, воронка"'/>
            </section>

            <section className={styles.articles}>
                <Paragraph header='Создать ' text='статью'/>
                <Button onClick={pushData} text='Создать' name='create-article'/>
            </section>

            <div className={styles.alerts}>
                {countAlert ?

                    countAlert.map((type, index) =>{
                        return <Alert key={index} type={type.type} time={5000} text={type.text}/> 
                    }) : null

                    // tags.length === 0 || keywords === ''
                }
            </div>

        </div>
    )
}

export default HomePage