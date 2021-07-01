import React from 'react'
import Image from 'next/image'
import styles from '../../styles/projects.module.css'
import mockups from '../../public/chartsourceMockups.png'
import rubySvgLogo from '../../public/rubySvgLogo.svg'
import railsSvgLogo from '../../public/railsSvgLogo.svg'
import { motion, AnimatePresence } from 'framer-motion'


export default function ChartSource() {
    return (
        <AnimatePresence>
            <div className={styles.project}>   
                <motion.section 
                    className={styles.left_pane}
                    initial={{ x: -500 }}
                    animate={{ x: 0 }}
                    exit={{y: 1000}}
                    transition={{
                        type: 'spring',
                        duration: .8,
                        staggerChildren: 0.5
                    }}
                >
                    <h1>Chart-Source</h1>
                    <h2>Library tool for bandleaders to quickly share PDF charts with their team.</h2>
                    <p>
                        Upload your entire sheet music library, organize and create setlists, and share with your team at the click of a button!
                            <br /><br />
                        <em><b>Ruby on Rails</b></em> - Manages data across the application.
                            <br /><br />
                        <em><b>Drag and Drop </b></em> - Full user authentication by use of JSON Web Tokens.  
                            <br /><br />
                        <em><b>Dynamic Nested Forms</b></em>- Data fetching and memization.
                            <br /><br />
                        <em><b>Omniauth</b></em>- Implemented user login using facebook or Github account.
                    </p>
                    <div className={styles.cta_buttons}>
                        <motion.button
                            type="button"
                            onClick={() => location.href='https://github.com/dirklo/taskaholik-front-end'}
                            whileHover={{ scale: 1.1 }}
                        >
                            View Code
                        </motion.button>
                        <motion.button
                            type="button"
                            whileHover={{ scale: 1.1 }}
                        >
                            <a
                                href='https://dirklo.github.io/taskaholik-front-end/'
                                target='_blank'
                                rel='noreferrer'
                            >
                                Live App
                            </a>
                        </motion.button>
                    </div>
                </motion.section>
                <motion.section 
                    className={styles.right_pane}
                    initial={{ x: 1000 }}
                    animate={{ x: 0 }}
                    exit={{y: 1000}}
                    transition={{
                        type: 'spring',
                        delay: .3,
                        duration: .6
                    }}
                >
                    <div className={styles.techlist}>
                        <div>
                            <Image src={rubySvgLogo} alt="Ruby Logo" />
                        </div>
                        <div>
                            <Image src={railsSvgLogo} alt="Rails Logo" />
                        </div>
                    </div>
                    <Image src={mockups} alt="Taskaholic Mockups" />
                </motion.section>
            </div>
        </AnimatePresence>
    )
}
