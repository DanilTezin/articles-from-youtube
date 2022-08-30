import React, { ChangeEvent, useState } from 'react'
import TagList from '../../components/Biz/TagList/TagList'
import Button from '../../components/UI/Button/Buttom'
import Input from '../../components/UI/Input/Input'
import styles from './homepage.module.css'
import { useAction } from '../../hooks/actions';
import { ITag } from '../../store/interfaces/models';
import { useAppSelector } from '../../hooks/redux';
const HomePage = () =>{

    const [tag, setTag] = useState<ITag>({text: ''})

    const {addFavorite} = useAction()
    const {tags} = useAppSelector(state => state.fromyoutube)

    const handleInput = (event: ChangeEvent<HTMLInputElement>) =>{
        setTag({text: event.target.value})
    }
    const addTag = ()=>{
        addFavorite(tag)
        setTag({text: ''})
    }   

    return(
        <div className={styles.content}>
            <Input onChange={handleInput} value={tag.text} name='tag' label='Имя тега'/>
            <Button onClick={addTag} color='red' name='pushtag' text='Отправить'/>
            <TagList tags={tags}/>
        </div>
    )
}

export default HomePage