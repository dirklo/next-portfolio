import React from 'react'
import Image from 'next/image'
import styles from '../../styles/projects.module.css'
import mockups from '../../public/cryptosearchMockups.png'
import rubySvgLogo from '../../public/rubySvgLogo.svg'
import { motion, AnimatePresence } from 'framer-motion'


export default function Cryptosearch() {
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
                    <h1>Crypto-Search</h1>
                    <h2>Command line tool to search for currrent and historical market data of the top crypto-currencies.</h2>
                    <p>
                        Search for a list of the top twenty most popular crypto-currencies, and use the menus to view current market data, developer data, historical data and world market data.
                            <br /><br />
                        <em><b>Ruby</b></em> - Built as a gem with Ruby.
                            <br /><br />
                        <em><b>Nokogiri</b></em> - Implemented web-scraping and api data fetching.
                            <br /><br />
                        <em><b>Money and Date Gems</b></em> - Fully formatted date and money displays,  with full foreign currency support.
                    </p>
                    <div className={styles.cta_buttons}>
                        <motion.button
                            type="button"
                            onClick={() => location.href='https://github.com/dirklo/crypto_search_cli'}
                            whileHover={{ scale: 1.1 }}
                        >
                            View Code
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
                    </div>
                    <Image src={mockups} alt="Taskaholic Mockups" />
                </motion.section>
            </div>
        </AnimatePresence>
    )
}
