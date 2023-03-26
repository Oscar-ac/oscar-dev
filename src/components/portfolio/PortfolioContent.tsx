import classes from '@/styles/PortfolioContent.module.css'

export default function PortfolioContent(props:any) {

    const post = props.post

    return(
        <main>
            <section className={`${classes['article--hero']}`} style={{backgroundImage: `url(${post.featuredImage.node.sourceUrl})`}}> 
                <div className={`${classes['article--hero-darken']}`}>
                    <h1 className={`${classes['article--title']}`}>{post.title}</h1>
                </div>
            </section>
            <section className={`${classes['article--content']}`}>
                <article dangerouslySetInnerHTML={{__html: post.content}}></article>
            </section>
        </main>
    )
}