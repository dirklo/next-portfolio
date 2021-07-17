import React from 'react'
import portrait from '../public/portrait.png'
import Image from 'next/image'
import SocialContainer from './SocialContainer'
import { motion } from 'framer-motion'
import styledJsx from '../styles/Landing.styles'
import Link from 'next/link'

export default function Landing() {
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
                    <h1 className={`${styledJsx.className} name_h1`}>Hey there, I&apos;m Rick!</h1>
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
                    <h2 className={`${styledJsx.className} name_h2`}>I&apos;m a software engineer and web developer</h2>
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
                    <div className={`${styledJsx.className} social_bar`}></div>
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
                {/* <Link href="/projects" passHref>
                    <motion.a 
                        className={`${styledJsx.className} cta_button`}
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
                        Let&apos;s Go! -&gt;
                    </motion.a>
                </Link> */}
            </div>
            <motion.div 
                className={`${styledJsx.className} portrait_div`}
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
