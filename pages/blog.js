import React from 'react'
import Image from 'next/image'
import styles from '../styles/blog.module.css'
import { motion } from 'framer-motion'
import parse from 'html-react-parser'
import dayjs from 'dayjs'

export default function blog(props) {

    const parseHTMLString = (() => {
        return str => parse(str, "text/html");
    })();

    const featureBlurb = parseHTMLString(props.data.items[0].content)[1].props.children
    const remainingPosts = props.data.items.slice(1) 
    console.log(remainingPosts)   

    return (
        <motion.div
            className={styles.blog}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className={styles.feature}>
                <Image
                    src={props.data.items[0].thumbnail}
                    alt='Featured Blog'
                    layout="fill"
                    objectFit='cover'
                    quality='100'
                />
                <p>{featureBlurb}</p>
                <div className={styles.feature_title}>
                    <h2>
                        <em>Todays feature</em>
                    </h2>
                    <h2>{props.data.items[0].title}</h2>
                </div>
                <motion.button
                    onClick={() => window.open(props.data.items[0].link, '_blank').focus()}
                    whileHover={{ 
                        boxShadow: '0px 0px 20px gold',
                        transition: { duration: 0.5 }
                    }}
                >
                    Read more...
                </motion.button>
            </div>
            <div className={styles.remaining_posts_container_cover}>
            </div>
            <div className={styles.remaining_posts_container}>
                    {remainingPosts.map((post, index) => 
                        <motion.div 
                        key={index}
                            className={styles.post_card}
                            whileHover={{ scale: 1.05 }}
                            onClick={() => window.open(post.link, '_blank').focus()}
                        >
                            <h2>{post.title}</h2>
                            <h3>{dayjs(post.pubDate).format('MMMM D, YYYY')}</h3>
                            <div className={styles.post_image_container}>
                                <Image
                                    alt={post.title}
                                    src={post.thumbnail}
                                    layout='fill'
                                    objectFit='cover'
                                    />

                            </div>
                        </motion.div>
                    )}
            </div>
        </motion.div>
    )
}

export async function getStaticProps(context) {
    const res = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@dirklo')
    const data = await res.json()
  
    if (!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: { data }
    }
}
  