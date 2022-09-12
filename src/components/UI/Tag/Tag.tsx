import { ITag } from '../../../store/interfaces/models';
import { useAction } from '../../../hooks/actions';
const Tag = ({tag}: {tag: ITag}) =>{

    const {removeFavorite} = useAction()

    const removeToFavorite = (event: React.MouseEvent<HTMLButtonElement>) =>{
        event.preventDefault()
        removeFavorite(tag)
    }

    return(
        <div style={{display: "flex", alignItems: "center", textAlign: "center", height: '40px'}} key={tag.id}>
            <p style={{width: "100%",color:'black', height: '30px',backgroundColor: '#f2f2f2', alignItems: 'center', display: 'flex'}}>
                {tag.text}
            </p>
            <button
                style={{width: "50px", height: "30px"}}
                onClick={removeToFavorite}
            >X</button>
        </div>
    )
}

export default Tag