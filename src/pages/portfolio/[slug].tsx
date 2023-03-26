import Image from 'next/image';
import Canvas from '@/components/canvas/Canvas'
import PortfolioContent from '@/components/portfolio/PortfolioContent'

export default function Portfolio( data:any ){
    console.log(data);
    
    const post  = data.portfolioItem;
    
    return(
      <>
        <PortfolioContent post={post}/>
        <Canvas/>
      </>
    )
} 


export async function getStaticProps(context:any){

    console.log(context);
    
    const res = await fetch('http://oscar-dev.online/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
        query singlePortfolio($id: ID!, $idType: PortfolioItemIdType!) {
            portfolioItem(id: $id, idType: $idType) {
              slug
              title
              content
              featuredImage {
                node {
                  sourceUrl
                }
              }
            }
          }
        `,
        variables: {
            id: context.params.slug,
            idType: 'URI'
        }
      }),
    });
  
    const json = await res.json();
  
    return {
      props: {
        portfolioItem: json.data.portfolioItem
      }
    }
}

export async function getStaticPaths(){
    const res = await fetch('http://oscar-dev.online/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: `
            query allPortfolioQuery {
              portfolioItems(first:100) {
                nodes {
                  id
                  slug
                  title
                  featuredImage {
                    node {
                      altText
                      sourceUrl
                    }
                  }
                }
              }
            }
          `
        }),
    });
    
    const json = await res.json();
    const portfolioItems = json.data.portfolioItems.nodes

    const paths = portfolioItems.map((portfolioItem:any) => ({
        params: { slug: portfolioItem.slug },
    }))

    return {  paths, fallback: false}
}