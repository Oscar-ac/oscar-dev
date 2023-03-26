import TextCard from '@/components/card/TextCard'
import classes from '@/styles/Article.module.css'

export default function Article(props:any){

    return(
        <article className={`${props.className} ${classes['article--container']} row align-content-center justify-content-center align-items-center`}>
            <TextCard className={`col-6`}>
                {props.title && <h2>{props.title}</h2>}
                {props.content && <div className={`card--text-card--content`} dangerouslySetInnerHTML={{__html: props.content}}></div>}
            </TextCard>
            <img className={`col-6 path--hex`} src={props.imageObj.sourceUrl}/>
        </article>
    )
}