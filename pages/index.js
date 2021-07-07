import Head from 'next/head'
import styledJsx from '../styles/Home.styles.js'
import Landing from '../components/Landing'


export default function Home() {
  return (
    <div 
      className={`${styledJsx.className} container`}
    >
      <Head>
        <title>Rick Moore Portfolio</title>
        <meta name="description" content="Development portfolio for Rick Moore" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styledJsx.className} main`}>
        <Landing />
      </main>
      {styledJsx.styles}
    </div>
  )
}
