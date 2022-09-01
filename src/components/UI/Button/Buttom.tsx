import React, { ButtonHTMLAttributes, FC, InputHTMLAttributes } from 'react'
import styles from './button.module.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    name: string
    text: string
    color: string
}

const Button: FC<ButtonProps> = ({name, text, color, ...rest}) =>{
    return(
        <button {...rest} className={styles.button}>{text}</button>
    )
}
    
export default Button
