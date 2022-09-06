import { FC } from "react";
import styles from './articles.module.css'


const ArticlesPage: FC = () =>{
    return(
        <div>
            <div className={styles.header}>
                <h1 className={styles.title}>Статьи</h1>
            </div>
        </div>
    )
}

export default ArticlesPage