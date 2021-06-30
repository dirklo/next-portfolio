import React from 'react'
import Image from 'next/image'
import styles from '../../styles/projects.module.css'
import mockups from '../../public/TaskaholikMockups.png'
import javascriptSvgLogo from '../../public/javascriptSvgLogo.svg'
import reactSvgLogo from '../../public/reactSvgLogo.svg'
import reduxSvgLogo from '../../public/reduxSvgLogo.svg'
import railsSvgLogo from '../../public/railsSvgLogo.svg'
import { motion } from 'framer-motion'


export default function Taskaholik() {
    return (
        <div className={styles.project}>   
            <motion.section 
                className={styles.left_pane}
                initial={{ x: -500 }}
                animate={{ x: 0 }}
                exit={{y: 1000}}
                transition={{
                    type: 'spring',
                    duration: .8,
                    staggerChildren: .5
                }}
            >
                <h1>Taskaholik</h1>
                <h2>Bug-tracker and team management application built with React and Ruby on Rails</h2>
                <p>
                    Put together a team, create a project, outline your goals and deadlines, and assign team members.
                        <br /><br />
                    Redux - Manages data across the application.
                        <br /><br />
                    Devise/JWT’s - Full user authentication by use of JSON Web Tokens.  
                        <br /><br />
                    React-query - Data fetching and memization.
                </p>
            </motion.section>
            <motion.section 
                className={styles.right_pane}
                initial={{ x: 500 }}
                animate={{ x: 0 }}
                exit={{y: 1000}}
                transition={{
                    type: 'spring',
                    delay: .3,
                    duration: .6
                }}
            >
                <div className={styles.techlist}>
                    <Image src={javascriptSvgLogo} alt="Javascript logo"></Image>
                    <Image src={reactSvgLogo} alt="React Logo"></Image>
                    <Image src={reduxSvgLogo} alt="Redux Logo"></Image>
                    <Image src={railsSvgLogo} alt="Rails Logo"></Image>
                </div>
                <Image src={mockups} alt="Taskaholic Mockups" />
            </motion.section>
        </div>
    )
}
