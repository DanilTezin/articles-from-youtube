import { useEffect, useState } from "react"



const useAlert = (time: number) =>{

    const [activeAlert, setActiveAlert] = useState(false)

    

    useEffect(()=>{

    },[activeAlert])

    const start :any  =()=>{
        setActiveAlert(!activeAlert)
        setTimeout(()=>{
            setActiveAlert(false)
        }, time)
    }

    const hidde :any  =()=>{
        setActiveAlert(!activeAlert)
    }

    return [activeAlert, start, hidde]
    
}

export default useAlert