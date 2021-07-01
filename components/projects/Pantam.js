import React from 'react'
import Image from 'next/image'
import styles from '../../styles/projects.module.css'
import mockups from '../../public/PantamMockups.png'
import javascriptSvgLogo from '../../public/javascriptSvgLogo.svg'
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
                    staggerChildren: 0.5
                }}
            >
                <h1>Pantam</h1>
                <h2>Playable, in-browser virtual instrument.  Built with JavaScript, Web Audio API, and Ruby on Rails</h2>
                <p>
                    Create and save your own unique scales, and play your custom Hand Pan with your keyboard!
                        <br /><br />
                    <em><b>Unique Interface</b></em> - 3-tier keyboard mapping for dynamic, expressive performance.
                        <br /><br />
                    <em><b>Asynchronous JavaScript</b></em> - Database implemented with a headless Ruby on Rails API and Fetch.  
                        <br /><br />
                    <em><b>Audio Effects</b></em> - Designed and managed with Web Audio API.
                </p>
                <div className={styles.cta_buttons}>
                    <motion.button
                        type="button"
                        onClick = {() => {
                            window.open('https://github.com/dirklo/hang-pan-frontend', '_blank')
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ backgroundColor: '#062f36' }}
                    >
                        View Code
                    </motion.button>
                    <motion.button
                        type="button"
                        onClick = {() => {
                            window.open('https://dirklo.github.io/hang-pan-frontend/', '_blank')
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
                <div className={styles.techlist}>
                        <div>
                            <Image src={javascriptSvgLogo} alt="Javascript logo"></Image>
                        </div>
                        <div>
                            <Image src={railsSvgLogo} alt="Rails Logo"></Image>
                        </div>
                    </div>
                </div>
                <Image src={mockups} alt="Taskaholic Mockups" />
            </motion.section>
        </div>
    )
}
