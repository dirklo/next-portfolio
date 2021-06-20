import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Landing from '../components/Landing'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rick Moore Portfolio</title>
        <meta name="description" content="Development portfolio for Rick Moore" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Landing />
      </main>
    </div>
  )
}
