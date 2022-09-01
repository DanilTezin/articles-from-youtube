import React, { FC, useEffect } from "react";
import { useAction } from "../../../hooks/actions";
import styles from './alert.module.css'


export type typeColor = 'success' | 'error'     

export interface AlertProps{
    key?: number
    type: typeColor
    text: string
    time: number
    click?: React.MouseEventHandler
}

const Alert :FC<AlertProps> = ({text, type, key, time}) =>{
    const {removeAlert} = useAction()
    
  

    useEffect(()=>{
        setTimeout(()=>{
            removeAlert()
        } , time)
    })
    

    return(
        <div
         className={styles.content}>
            <p>{text}</p>
            <span onClick={()=>removeAlert()}>X</span>
        </div>
    )
}

export default Alert