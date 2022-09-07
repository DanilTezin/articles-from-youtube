import { ChangeEvent, FC, useEffect, useState } from "react";
import Button from "../../components/UI/Button/Buttom";
import Input from "../../components/UI/Input/Input";
import Loader from "../../components/UI/Loader/Loader";
import { useAction } from "../../hooks/actions";
import { useLinkArticleMutation } from "../../store/services/from-youtube/fromyoutube.api";
import styles from './getbylinkpage.module.css'




const ErrorPost:FC = () =>{
    const {addAlert} = useAction();

    useEffect(()=>{
        addAlert({
            type: 'error',
            text: "Ошибка, не отправлен на сервер",
        })
    })

    return <></>
}


const GetbylinkPage: FC = () =>{
    
    const [link, setLink] = useState('');
    const {addAlert} = useAction();
    const [pushlink,{isLoading, isError}] = useLinkArticleMutation()

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

            {isLoading && <Loader/>}
            {isError && <ErrorPost/> }
        </div>
    )
}

export default GetbylinkPage