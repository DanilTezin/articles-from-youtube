import React, { FC, InputHTMLAttributes } from 'react'
import styles from './input.module.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    name: string
    label: string
}

const Input: FC<InputProps> = ({name, label, ...rest}) =>{
    return(
        <div className={styles.inputWrapper}>
            <label htmlFor={name}>{label}</label>
            <input id={name} {...rest} />
        </div>
    )
}
    
export default Input
