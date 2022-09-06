import { FC } from "react";
import { Link } from "react-router-dom";
import styles from './header.module.css'

const Header: FC = () =>{
    return(
        <header className={styles.header}>
            <h2>Articles from youtube App</h2>
            <nav>
                <Link className={styles.link} to="/">Главная</Link>
                <Link className={styles.link} to="/loadvideo">Загрузить видео</Link>
                <Link className={styles.link} to="/articlelink">По ссылке</Link>
                <Link className={styles.link} to="/articles">Статьи</Link>
            </nav>
        </header> 
    )
}

export default Header