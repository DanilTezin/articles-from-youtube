import { ChangeEvent, FC, useRef, useState } from "react"
import { useAction } from "../../../hooks/actions"
import Button from "../../UI/Button/Buttom"
import Loader from "../../UI/Loader/Loader"
import styles from './upload.module.css'

const Upload: FC = ()=>{

    const uploadRef = useRef<HTMLInputElement>(null)
    const [loadingFile, setLoadingFile] = useState(false)
    const {addAlert} = useAction()

    const handleUpload = (e: ChangeEvent<HTMLInputElement>) =>{
        let formdata = new FormData()
        formdata.append('file', e.target.files![0])
        
        if(e.target.files === null) return
        
        const file = e.target.files[0]
        
        if(file){
            file.type !== 'video/mp4' && console.log("ERROR TYPE")

            if(file.type !== 'video/mp4'){
                addAlert(
                    {
                        type: 'error',
                        text: 'Выберите файл формата MP4'
                    }
                )
            }else{
                setLoadingFile(true)

            }
        }else console.log('error')

    }

    return(
        <section className={loadingFile ? styles.none : styles.content}>
       
            {!loadingFile &&
                <>
                    <Button onClick={()=> uploadRef.current?.click()} name="pushVideo" text="Получить статью"/>
                    <input accept="video/mp4" type="file" ref={uploadRef} onChange={handleUpload}/>
                </>
            }
            
            {loadingFile && <Loader/>}
        </section>

    )
}

export default Upload