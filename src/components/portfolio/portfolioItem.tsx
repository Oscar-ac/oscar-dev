import Link from 'next/link';
import {useRouter} from 'next/router';
import {useContext} from 'react';
import OscarDevContext from '@/store/OscarDevContext';
import Card from '@/components/card/card';

const PortfolioItem = ( props:any ) => {
    // const router = useRouter();
    const post = props.pItem;


    // console.log(post);

    return(
        <Card slug={post.slug} image={post.featuredImage} title={post.title}></Card>            
    );
}

export default PortfolioItem;