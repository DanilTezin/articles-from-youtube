import { FC } from "react";
import Upload from "../../components/Biz/Upload/Upload";
import Subtitle from "../../components/UI/Subtitle/Subtitle";
import styles from './loadvideo.module.css'


const LoadvidePage: FC = () =>{
    return(
        <div>
            <Subtitle name="Загрузить видео"/>

            <div className={styles.content}>
                <Upload/>
            </div>
        </div>
    )
}

export default LoadvidePage