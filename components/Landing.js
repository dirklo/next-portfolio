import React from 'react'
import portrait from '../public/portrait.png'
import Image from 'next/image'
import SocialContainer from './SocialContainer'
import { motion } from 'framer-motion'
import styledJsx from '../styles/Landing.styles'

export default function Landing() {

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
                <div className={`${styledJsx.className} rect`}></div>
                
                <motion.div 
                    initial="moved" 
                    animate="positioned"
                    variants={buildVariants({x: -500}, 0)}
                >
                    <h1 className={styledJsx.className}>Hey there, I&apos;m Rick!</h1>
                </motion.div>
                <motion.div 
                    initial="moved" 
                    animate="positioned"
                    variants={buildVariants({x: -500}, .3)}
                >    
                    <h2 className={styledJsx.className}>I&apos;m a software engineer and web developer</h2>
                </motion.div>
                <motion.div 
                    initial="moved" 
                    animate="positioned"
                    variants={buildVariants({y: 500}, .3)}
                >    
                    <div className={`${styledJsx.className} social_bar`}></div>
                </motion.div>
                <motion.div 
                    initial="moved" 
                    animate="positioned"
                    variants={buildVariants({y: 500}, .6)}
                >    
                    <SocialContainer />
                </motion.div>
            </div>
            <motion.div 
                className={`${styledJsx.className} portrait_div`}
                initial="moved" 
                animate="positioned"
                variants={buildVariants({x: 500}, 0)}
            >
                <Image 
                    className={`${styledJsx.className} portrait`} 
                    src={portrait}
                    width={525}
                    height={700} 
                    alt="Main portrait"
                    layout='fixed'
                    priority='true'
                    quality='50'
                />
            </motion.div>
            {styledJsx.styles}
        </motion.section>
    )
}
