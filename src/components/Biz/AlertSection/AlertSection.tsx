import React, { FC } from "react";
import { useAppSelector } from "../../../hooks/redux";
import Alert from "../../UI/Alert/Alert";
import styles from './alertsection.module.css'


const AlertSection :FC = () =>{

    const {countAlert} = useAppSelector(state=> state.fromyoutube)
    

    return(
        <div className={styles.alerts}>
             {countAlert ?
                countAlert.map((type, index) =>{
                    return <Alert key={index} type={type.type} time={100000} text={type.text}/> 
                }) : null
            }
        </div>
    )
}

export default AlertSection