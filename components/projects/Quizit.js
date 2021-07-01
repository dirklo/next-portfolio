import React from 'react'
import Image from 'next/image'
import styles from '../../styles/projects.module.css'
import mockups from '../../public/quizitMockups.png'
import rubySvgLogo from '../../public/rubySvgLogo.svg'
import sinatraSvgLogo from '../../public/sinatraSvgLogo.svg'
import javascriptSvgLogo from '../../public/javascriptSvgLogo.svg'
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
                            onClick={() => location.href='https://github.com/dirklo/quiz-it-three'}
                            whileHover={{ scale: 1.1 }}
                        >
                            View Code
                        </motion.button>
                        <motion.button
                            type="button"
                            whileHover={{ scale: 1.1 }}
                        >
                            <a
                                href='https://dirklo.github.io/quiz-it-three/'
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
                            <Image src={sinatraSvgLogo} alt="Sinatra Logo" />
                        </div>
                        <div>
                            <Image src={javascriptSvgLogo} alt="Javascript Logo" />
                        </div>
                    </div>
                    <Image src={mockups} alt="Taskaholic Mockups" />
                </motion.section>
            </div>
        </AnimatePresence>
    )
}
