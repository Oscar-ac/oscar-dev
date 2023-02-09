import { useRouter } from 'next/router';
import { useContext } from 'react';
import OscarDevContext from '@/store/OscarDevContext';

const Detail = () => {
    const ODContext = useContext(OscarDevContext);
    const router = useRouter();

    const currentPostUrl = window.location.href;
    const n = currentPostUrl.lastIndexOf('/');
    const result = currentPostUrl.substring(n + 1);

    ODContext.setSlug(result);

    // console.log(ODContext.slug);
    // const 
    // console.log(currentPostUrl);
    console.log(result);
    // const data:any = router.query;

    return(
        <>
        <h1>{}</h1>
        <div/>
        </>
    );

}

export default Detail;