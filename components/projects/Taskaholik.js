import React from 'react'
import Image from 'next/image'
import styles from '../../styles/projects.module.css'
import { motion, AnimatePresence } from 'framer-motion'


export default function Taskaholik() {
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
                    <h1>Taskaholik</h1>
                    <h2>Bug-tracker and team management application built with React and Ruby on Rails</h2>
                    <p>
                        Put together a team, create a project, outline your goals and deadlines, and assign team members.
                            <br /><br />
                        <em><b>Redux</b></em> - Manages data across the application.
                            <br /><br />
                        <em><b>Devise/JWT’s</b></em> - Full user authentication by use of JSON Web Tokens.  
                            <br /><br />
                        <em><b>React-query</b></em>- Data fetching and memization.
                    </p>
                    <div className={styles.cta_buttons}>
                        <motion.button
                            type="button"
                            onClick={() => {
                                window.open('https://github.com/dirklo/taskaholik-front-end', '_blank')
                            }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ backgroundColor: '#062f36' }}
                        >
                            View Code
                        </motion.button>
                        <motion.button
                            type="button"
                            onClick={() => {
                                window.open('https://dirklo.github.io/taskaholik-front-end/', '_blank')
                            }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ backgroundColor: '#1c0f41' }}
                        >
                            Live App
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
                        <Image src='/javascriptSvgLogo.svg' height='60' width='60' layout='fixed' alt="Javascript logo"></Image>
                        <Image src='/reactSvgLogo.svg' height='60' width='60' layout='fixed' alt="React logo"></Image>
                        <Image src='/reduxSvgLogo.svg' height='60' width='60' layout='fixed' alt="Redux logo"></Image>
                        <Image src='/railsSvgLogo.svg' height='60' width='60' layout='fixed' alt="Rails logo"></Image>
                    </div>
                    <Image src='/TaskaholikMockups.png' alt='Taskaholic Mockups' height='464' width='500' layout='fixed'/>
                </motion.section>
            </div>
        </AnimatePresence>
    )
}
