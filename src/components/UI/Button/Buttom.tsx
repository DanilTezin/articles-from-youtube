import React, { ButtonHTMLAttributes, FC } from 'react'
import styles from './button.module.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    name: string
    text: string
}

const Button: FC<ButtonProps> = ({name, text, ...rest}) =>{
    return(
        <button {...rest} className={styles.button}>{text}</button>
    )
}
    
export default Button
