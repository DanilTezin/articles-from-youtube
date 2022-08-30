import React, { ChangeEvent, useState } from 'react'
import TagList from '../../components/Biz/TagList/TagList'
import Button from '../../components/UI/Button/Buttom'
import Input from '../../components/UI/Input/Input'
import styles from './homepage.module.css'
import { useAction } from '../../hooks/actions';
import { ITag, IKeywords } from '../../store/interfaces/models';
import { useAppSelector } from '../../hooks/redux';
import KeywordsList from '../../components/Biz/KeywordsList/KeywordsList'
const HomePage = () =>{

    const {addFavorite, addKeywords} = useAction()
    const [tag, setTag] = useState<ITag>({text: ''})
    const [keyword, setKeywords] = useState<string>('')
    const {tags} = useAppSelector(state => state.fromyoutube)
    const {keywords} = useAppSelector(state => state.fromyoutube)


    const handleInputTag = (event: ChangeEvent<HTMLInputElement>) =>{
        setTag({text: event.target.value})
    }

    const handleInputKeywords = (event: ChangeEvent<HTMLInputElement>) =>{
        setKeywords(event.target.value)
    }

    const addTag = ()=>{
        addFavorite(tag)
        setTag({text: ''})
    }   

    const addKeyword = ()=>{
        addKeywords(keyword)
        console.log(keyword)
        setKeywords('')
    }

    return(
        <div className={styles.content}>

            <section>
                <Input onChange={handleInputTag} value={tag.text} name='tag' label='Имя тега'/>
                <Button onClick={addTag} color='red' name='pushtag' text='Отправить'/>
                <TagList tags={tags}/>
            </section>

            <section>
                <Input onChange={handleInputKeywords} value={keyword} name='tag' label='Ключивые слова'/>
                <Button onClick={addKeyword} color='red' name='pushtag' text='Добавить список'/>
                <KeywordsList keywords={keywords}/>
            </section>
        </div>
    )
}

export default HomePage