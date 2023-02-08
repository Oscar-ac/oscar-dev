import { useRouter } from 'next/router';

const Detail = () => {

    const router = useRouter();
    const data:any = router.query;

    // JSON.parse(data);

    // console.log(JSON.parse(data));
    console.log(data);

    return(
        <>
        <h1>{data.title}</h1>
        <div dangerouslySetInnerHTML={{__html: data.content}} />
        </>
    );

}

export default Detail;