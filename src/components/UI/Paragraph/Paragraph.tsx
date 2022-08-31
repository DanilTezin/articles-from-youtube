import { FC } from "react";
import styles from './paragraph.module.css'

interface ParagraphProps{
    header: string
    text: string
}

const Paragraph: FC<ParagraphProps> = ({header, text, ...rest}) =>{

    return(

        <p className={styles.p} {...rest}>
            <span>
                {header}
            </span>
            {text}
        </p>
    )
}

export default Paragraph