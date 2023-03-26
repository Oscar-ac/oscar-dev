import Article from "@/components/content/Article"

export default function PageHeader(props:any) {

    const data = props.data

    return(
        <>
        <h1>{data.title}</h1>
        <Article imageObj={data.featuredImage.node} content={data.content}/>
        </>
    )
}