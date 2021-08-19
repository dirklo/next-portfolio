import React, { useState } from 'react'
import portrait from '../public/portrait.png'
import Image from 'next/image'
import SocialContainer from './SocialContainer'
import { motion } from 'framer-motion'
import styledJsx from '../styles/LandingSm.styles'

export function getStaticProps() {
    return (
      {props: {}}
    )
}

export default function Landing() {
    const [imgLoaded, setImgLoaded] = useState(false)

    const buildVariants = (startPos, delay) => {
        return {
            moved: startPos,
            positioned: {
                x: 0,
                y: 0,
                transition: {
                    duration: .6,
                    delay: delay
                }
            }
        }
    }

    return (
        <motion.section
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            exit={{ opacity: 0}}
            className={`${styledJsx.className} landing`}
        >
            <div className={`${styledJsx.className} name_div`}>
                <motion.div 
                    initial="moved" 
                    animate="positioned"
                    variants={buildVariants({x: -500}, 0)}
                >
                    <h1 className={`${styledJsx.className} name_h1_1`}>Rick</h1>
                    <h1 className={`${styledJsx.className} name_h1_2`}>moore</h1>
                </motion.div>
            </div>
            <motion.div 
                initial="moved" 
                animate="positioned"
                variants={buildVariants({y: 500}, .6)}
            >    
                <SocialContainer />
            </motion.div>
            <motion.div 
                initial="moved" 
                animate="positioned"
                variants={buildVariants({x: -500}, .3)}
                className={`${styledJsx.className} h2_container`}
            >    
                <h2 className={styledJsx.className}>Software Engineer <br/> Web Developer</h2>
                <div className={`${styledJsx.className} rect`}></div>
            </motion.div>
            <motion.div 
                className={`${styledJsx.className} portrait_div`}
                initial="moved" 
                animate="positioned"
                variants={buildVariants({x: 500}, 0)}
            >
                <Image 
                    className={`${styledJsx.className} portrait`} 
                    src={portrait}
                    width={294}
                    height={392} 
                    alt="Main portrait"
                    layout='fixed'
                    quality='50'
                    priority
                />
            </motion.div>
            {styledJsx.styles}
        </motion.section>
    )
}
