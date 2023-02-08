import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Portfolio from '@/components/portfolio/portfolio'
import Background from '@/components/background/background'

import React, { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  const [portfolioData, setPortfolioData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('https://oscar-dev.online/staging/4760/wp-json/wp/v2/portfolio/?per_page=99&status=publish')
      .then((res) => res.json())
      .then((data) => {
        setPortfolioData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!portfolioData) return <p>No profile data</p>
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Background />
      <main className={`row ${styles.main}`}>
        {portfolioData && portfolioData.map((item:any, i:number) => <Portfolio key={`item=${i}`}>{item}</Portfolio>)}
        {/* {postData && postData.map((item:any, i:number) => <Portfolio key={`item=${i}`}>{item}</Portfolio>)} */}
        {/* {albumsData && albumsData.map((item:any, i:number) => <Portfolio key={`item=${i}`}>{item}</Portfolio>)} */}
      </main>
    </>
  )
}


// export async function getServerSideProps() {
//   const portfolioRes = await fetch('https://oscar-dev.online/staging/4760/wp-json/wp/v2/portfolio/?per_page=99&status=publish');
//   const portfolioData = await portfolioRes.json();
//   const postRes = await fetch('https://oscar-dev.online/staging/4760/wp-json/wp/v2/posts/?per_page=99&status=publish&categories=54');
//   const postData = await postRes.json();
//   const albumRes = await fetch('https://oscar-dev.online/staging/4760/wp-json/wp/v2/favourite_albums/?per_page=99&status=publish');
//   const albumsData = await albumRes.json();
//   return { props: { portfolioData, postData, albumsData } }
// }  

export default Home;
