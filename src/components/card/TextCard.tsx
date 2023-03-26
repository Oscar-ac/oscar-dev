import classes from '@/styles/TextCard.module.css'

export default function TextCard(props:any) {
    return(
        <div className={`${classes["card--text-card"]} ${props.className}`}>
            {props.children}
        </div>
    )
}