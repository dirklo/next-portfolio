import React from 'react'
import Image from 'next/image'
import styles from '../../styles/projects.module.css'
import { motion, AnimatePresence } from 'framer-motion'


export default function Quizit() {
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
                    <h1>Quiz-it</h1>
                    <h2>Quiz builder for educators to create custom quizzes and track their students scores.</h2>
                    <p>
                        Create two different styles of multiple choice questions, complete with auto-grading and comments.  Add accounts to your group and share your quizzes at the clock of a button.
                            <br /><br />
                        <em><b>Sinatra</b></em> - Built with Ruby, Sinatra, and vanilla Javascript.
                            <br /><br />
                        <em><b>Bcrypt</b></em> - Secure user login with the Bcrypt gem.
                            <br /><br />
                        <em><b>Dynamic Nested Forms</b></em> - Dynamic nested forms built by hand in JavaScript.
                    </p>
                    <div className={styles.cta_buttons}>
                        <motion.button
                            type="button"
                            onClick = {() => {
                                window.open('https://github.com/dirklo/quiz-it-three', '_blank')
                            }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ backgroundColor: '#062f36' }}
                        >
                            View Code
                        </motion.button>
                        <motion.button
                            type="button"
                            onClick = {() => {
                                window.open('https://quiz-it-three.herokuapp.com', '_blank')
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
                            <Image src='/rubySvgLogo.svg' alt="Ruby Logo" width='60' height='60' layout='fixed'/>
                            <Image src='/sinatraSvgLogo.svg' alt="Sinatra Logo" width='60' height='60' layout='fixed'/>
                            <Image src='/javascriptSvgLogo.svg' alt="Javascript Logo" width='60' height='60' layout='fixed'/>
                    </div>
                    <Image src='/quizitMockups.png' alt='Quitiz Mockups' height='464' width='500' layout='fixed'/>
                </motion.section>
            </div>
        </AnimatePresence>
    )
}
