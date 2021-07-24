import Head from 'next/head'
import Landing from '../components/Landing'

export function getStaticProps() {
  return (
    {props: {}}
  )
}

export default function Home() {
  return (
    <div 
      className='container'
    >
      <Head>
        <title>Rick Moore Portfolio</title>
        <meta name="description" content="Development portfolio for Rick Moore" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='main'>
        <Landing />
      </main>

      <style jsx>{`
        .container {
          position: relative;
          min-height: 100vh;
          max-width: 1320px;
          height: 100vh;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          overflow: visible;
        }

        .main {
          width: 100%;
        }  
      `}</style>
    </div>
  )
}
