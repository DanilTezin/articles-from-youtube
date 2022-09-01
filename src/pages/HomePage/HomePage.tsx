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
import useAlert from '../../hooks/useAlert';


const HomePage = () =>{

    const {addFavorite, addKeywords, removeKeyword, saveLocalTags} = useAction()
    const {tags, keywords} = useAppSelector(state => state.fromyoutube)

    const [keyword, setKeywords] = useState<string>('')
    const [tag, setTag] = useState<ITag>({text: ''})
    const [alert, setAlert, hiddeAlert] = useAlert(10000)

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
                <Button onClick={setAlert} text='Создать' name='create-article'/>
            </section>

            {alert ?
                tags.length === 0 || keywords === '' ? 
                 <Alert type={"error"} click={hiddeAlert} text="Не все поля заполнены"/> : 
                 <Alert type={"success"} click={hiddeAlert} text="Отправляем запрос на создание статьи..."/> : null
            }
        </div>
    )
}

export default HomePage