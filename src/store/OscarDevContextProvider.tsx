import React, {useState, useEffect} from 'react';
import OscarDevContext from "./OscarDevContext";

const OscarDevContextProvider = (props:any) => {
    const [portfolioData, setPortfolioData] = useState([])
    const [detailData, setDetailData] = useState([])
    const [isLoading, setLoading] = useState(false)
    const [pageSlug, setPageSlug] = useState("");

    useEffect(() => {
      setLoading(true)
      fetch('https://oscar-dev.online/staging/4760/wp-json/wp/v2/portfolio/?per_page=99&status=publish')
        .then((res) => res.json())
        .then((data) => {
          setPortfolioData(data)
          setLoading(false)
        })
    }, [])
  
    // useEffect(() => {
    //     console.log("slug changed");
    //     setLoading(true)
    //     const result = portfolioData.filter(post => post.slug = pageSlug);
    //     setDetailData(result);
    //     console.log(detailData);
    //     setLoading(false);
    // }, [pageSlug]);

    if (isLoading) return <p>Loading...</p>
    if (!portfolioData) return <p>No data</p>
    
    const setSlugHandler = (slug:any) => {
        setPageSlug(slug);
    }

    const oscarDevContext = {
        portfolioPosts: portfolioData,
        isLoading: isLoading,
        setSlug: setSlugHandler,
        slug: pageSlug,
        detailData: detailData
    }

    return(
        <OscarDevContext.Provider value={oscarDevContext}>
            {props.children}
        </OscarDevContext.Provider>
    );  
}

export default OscarDevContextProvider;