import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import parse from 'html-react-parser'
import dayjs from 'dayjs'
import styledJsx from '../styles/blog.styles'

export default function blog(props) {

    const parseHTMLString = (() => {
        return str => parse(str, "text/html");
    })();

    const featureBlurb = parseHTMLString(props.data.items[0].content)[1].props.children
    const remainingPosts = props.data.items.slice(1) 

    return (
        <motion.div
            className={`${styledJsx.className} blog`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className={`${styledJsx.className} feature`}>
                <Image
                    src={props.data.items[0].thumbnail}
                    alt='Featured Blog'
                    layout="fill"
                    objectFit='cover'
                    quality='100'
                />
                <p className={`${styledJsx.className} feature_blurb`}>{featureBlurb}</p>
                <div className={`${styledJsx.className} feature_title`}>
                    <h2 className={`${styledJsx.className} feature_title_h2`}>
                        <em>Todays feature</em>
                    </h2>
                    <h2 className={`${styledJsx.className} feature_title_h2`}>{props.data.items[0].title}</h2>
                </div>
                <motion.button
                    className={`${styledJsx.className} feature_button`}
                    onClick={() => window.open(props.data.items[0].link, '_blank').focus()}
                    whileHover={{ 
                        boxShadow: '0px 0px 20px gold',
                        transition: { duration: 0.5 }
                    }}
                >
                    Read more...
                </motion.button>
            </div>
            <div className={`${styledJsx.className} remaining_posts_container_cover`}>
            </div>
            <div className={`${styledJsx.className} remaining_posts_container`}>
                    {remainingPosts.map((post, index) => 
                        <motion.div 
                            className={`${styledJsx.className} post_card`}
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            onClick={() => window.open(post.link, '_blank').focus()}
                        >
                            <h2 className={`${styledJsx.className} post_card_h2`}>
                                {post.title}
                            </h2>
                            <h3 className={`${styledJsx.className} post_card_h3`}>
                                {dayjs(post.pubDate).format('MMMM D, YYYY')}
                            </h3>
                            <div className={`${styledJsx.className} post_image_container`}>
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
        {styledJsx.styles}
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
  