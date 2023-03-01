import Link from 'next/link';
import {useRouter} from 'next/router';
import {useContext} from 'react';
import OscarDevContext from '@/store/OscarDevContext';
import Card from '@/components/card/card';

const PortfolioItem = ( props:any ) => {
    // const router = useRouter();
    const post = props.pItem;

    return(
        <Link href={`/portfolio/${post.slug}`}>
            <Card>{post.title}</Card>            
        </Link>
    );
}

export default PortfolioItem;