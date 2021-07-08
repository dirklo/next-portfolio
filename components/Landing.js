import React from 'react'
import portrait from '../public/portrait.png'
import Image from 'next/image'
import SocialContainer from './SocialContainer'
import { motion } from 'framer-motion'
import styles from '../styles/Landing.module.css'

export default function Landing() {
    return (
        <motion.section
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            exit={{ opacity: 0}}
            className={styles.landing}
        >
            <div className={styles.name_div}>
                <div className={styles.rect}></div>
                <motion.div 
                    initial="moved" 
                    animate="positioned"
                    variants={{
                        moved: {
                            x: -500
                        },
                        positioned: {
                            x: 0,
                            transition: {
                                duration: .6
                            }
                        }
                    }}
                >
                    <h1>Hey there, I&apos;m Rick!</h1>
                </motion.div>
                <motion.div 
                    initial="moved" 
                    animate="positioned"
                    variants={{
                        moved: {
                            x: -500
                        },
                        positioned: {
                            x: 0,
                            transition: {
                                delay: .3,
                                duration: .6
                            }
                        }
                    }}
                >    
                    <h2>I&apos;m a software engineer and web developer</h2>
                </motion.div>
                <motion.div 
                    initial="moved" 
                    animate="positioned"
                    variants={{
                        moved: {
                            y: 500
                        },
                        positioned: {
                            y: 0,
                            transition: {
                                delay: .3,
                                duration: .6
                            }
                        }
                    }}
                >    
                    <div className={styles.social_bar}></div>
                </motion.div>
                <motion.div 
                    initial="moved" 
                    animate="positioned"
                    variants={{
                        moved: {
                            y: 500
                        },
                        positioned: {
                            y: 0,
                            transition: {
                                delay: .5,
                                duration: .6
                            }
                        }
                    }}
                >    
                    <SocialContainer />
                </motion.div>
            </div>
            <motion.div 
                className={styles.portrait_div}
                initial="moved" 
                animate="positioned"
                variants={{
                    moved: {
                        x: 500
                    },
                    positioned: {
                        x: 0,
                        transition: {
                            duration: .6
                        }
                    }
                }}
            >
                <Image 
                    className={styles.portrait} 
                    src={portrait}
                    width={525}
                    height={700} 
                    alt="Main portrait"
                    layout='fixed'
                    priority='true'
                    quality='50'
                />
            </motion.div>
        </motion.section>
    )
}
