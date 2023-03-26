import Card from '@/components/card/card'
import TextCard from '@/components/card/TextCard'
import classes from '@/styles/PortfolioItem.module.css'

const PortfolioItem = ( props:any ) => {
    const post = props.pItem;
    return(
        <div className={`${classes['portfolio-item--container']} row`}>
            <TextCard className={`${classes['portfolio-item--excerpt']} anim col-7`}><div dangerouslySetInnerHTML={{__html: post.excerpt}}></div></TextCard>
            <Card className="path--hex col-5" slug={post.slug} image={post.featuredImage} title={post.title}/>
        </div>
    );
}

export default PortfolioItem;