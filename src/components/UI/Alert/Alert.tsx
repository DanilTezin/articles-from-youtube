import React, { FC, useEffect } from "react";
import styles from './alert.module.css'

type typeColor = 'success' | 'error'     

interface AlertProps{
    type: typeColor
    text: string
    click?: React.MouseEventHandler
}

const Alert :FC<AlertProps> = ({text, type, click, ...rest}) =>{

    useEffect(()=>{
        console.log("OK")
    }, [])

    return(
        <div
         style={{backgroundColor: `${type === 'success' ? '#3fbf61' : '#bf3f3f'}`}}
         className={styles.content}>
            <p>{text}</p>
            <span onClick={click}>X</span>
        </div>
    )
}

export default Alert