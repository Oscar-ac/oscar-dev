import Link from 'next/link';
import { isPropertySignature } from "typescript";
import classes from "@/styles/card.module.css";


const Card = (props:any) => {
    const image = props.image
    const title = props.title

    return (
        <Link href={`/portfolio/${props.slug}`} className={`${classes["card"]} ${props.className} square`}>
            <div className={classes["card--bg"]} style={{backgroundImage: `url(${image.node.sourceUrl})`}}>
                <div className={classes["card--overlay"]}>
                    <div className={classes["card--title"]}>
                        <h3>{title}</h3>
                    </div>
                </div>
            </div>
        </Link> 
    )
}

export default Card;