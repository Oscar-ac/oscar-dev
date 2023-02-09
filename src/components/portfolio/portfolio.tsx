import Link from 'next/link';
import {useRouter} from 'next/router';
import {useContext} from 'react';
import OscarDevContext from '@/store/OscarDevContext';
import Card from '@/components/card/card';

const Portfolio = () => {
    const ODContext = useContext(OscarDevContext);
    const router = useRouter();

    console.log(ODContext.portfolioPosts);
    const posts = ODContext.portfolioPosts;

    // router.events.on('routeChangeComplete', (url, { shallow }) => {
    //     console.log(`routing to ${url}`, `is shallow routing: ${shallow}`);
    //     // const n = url.lastIndexOf('/');
    //     // const result = url.substring(n + 1);
    //     // ODContext.setSlug(result);
    //     // console.log(result);    
    // });

    return(
        <>
            {posts && posts.map((post:any, i:number) => 
            <Link key={`p-link-${i}`} href={{
                    pathname: `/detail/${post.slug}`,
                    // query: details
                }}>
                  
                <Card key={`portfolio-${i}`}>{post.title.rendered}</Card>            
            </Link>
            )}
        </>
    );
}

export default Portfolio;