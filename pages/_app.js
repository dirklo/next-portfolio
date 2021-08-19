import '../styles/globals.css'
import Head from 'next/head'
import Layout from '../components/Layout'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  return (
    <Layout>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.pathname}/>
      </AnimatePresence>
    </Layout>
  )
}

export default MyApp
