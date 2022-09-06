import { FC } from "react";
import loader from '../../../images/loader.gif'

const Loader: FC = () =>{
    return (
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems:'center'}}>
            <img style={{height: '300px', margin: 0}} src={loader} alt="" />
            <p>Загрузка...</p>
        </div>
    )

}
export default Loader