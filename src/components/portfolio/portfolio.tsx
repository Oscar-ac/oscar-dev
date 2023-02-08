import Link from 'next/link';

const Portfolio = (props:any) => {

    // console.log(JSON.stringify(props.children));

    const details:any = {
        title: props.children.title.rendered,
        content: props.children.content.rendered,
    }

    return(
        <>
        <Link href={{
            pathname: '/detail',
            query: details
        }}>
            {<div dangerouslySetInnerHTML={{__html: props.children.title.rendered}}/>}
        </Link>
        </>
    );
}

export default Portfolio;