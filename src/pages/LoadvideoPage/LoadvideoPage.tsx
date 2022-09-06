import { FC } from "react";
import Upload from "../../components/Biz/Upload/Upload";
import styles from './loadvideo.module.css'


const LoadvidePage: FC = () =>{
    return(
        <div>
            <div className={styles.header}>
                <h1 className={styles.title}>Загрузить видео</h1>
            </div>

            <div className={styles.content}>
                <Upload/>
            </div>
        </div>
    )
}

export default LoadvidePage