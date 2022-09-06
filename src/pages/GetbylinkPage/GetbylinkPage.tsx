import { ChangeEvent, FC, useState } from "react";
import Button from "../../components/UI/Button/Buttom";
import Input from "../../components/UI/Input/Input";
import { useAction } from "../../hooks/actions";
import { useLinkArticleMutation } from "../../store/services/from-youtube/fromyoutube.api";
import styles from './getbylinkpage.module.css'

const GetbylinkPage: FC = () =>{
    
    const [link, setLink] = useState('');
    const {addAlert} = useAction();
    const [pushlink,{isLoading, isError, data}] = useLinkArticleMutation()

    const handleLinkInput = (e: ChangeEvent<HTMLInputElement>)=>{
        setLink(e.target.value.toString())
    }

    const getArticle = () =>{
        verifyLink()
        pushlink(link)
    }

    const verifyLink = () =>{
        addAlert(link === '' || link.length < 10 ?
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
        <div>
            <div className={styles.header}>
                <h1 className={styles.title}>Получить статью по ссылке на видео</h1>
            </div>

            <div className={styles.content}>
                <Input onChange={handleLinkInput} value={link} name="Получить статью по ссылке" label="Ссылка на видео"/>
                <Button onClick={getArticle} name="pushlik" text="Получить статью"/>
            </div>
        </div>
    )
}

export default GetbylinkPage