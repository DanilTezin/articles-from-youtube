import { FC } from "react";
import styles from './subtitle.module.css'


interface PropsSubtitle{
    name: string;
}


const Subtitle: FC<PropsSubtitle> = ({name}) =>{
    return(
        <div>
            <div className={styles.header}>
                <h1 className={styles.title}>{name}</h1>
            </div>
        </div>
    )
}

export default Subtitle