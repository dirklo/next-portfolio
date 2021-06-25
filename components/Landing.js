import React from 'react'
import styles from '../styles/Landing.module.css'
import portrait from '../public/portrait.png'
import Image from 'next/image'
import SocialContainer from './SocialContainer'

export default function Landing() {
    return (
        <section className={styles.landing}>
            <div className={styles.name_div}>
                <div className={styles.rect}></div>
                <h1>Hey there, I&apos;m Rick!</h1>
                <h2>I&apos;m a software engineer and web developer</h2>
                <div className={styles.social_bar}></div>
                <SocialContainer />
            </div>
            <div className={styles.portrait_div}>
                <Image 
                    className={styles.portrait} 
                    src={portrait} 
                    alt="Main portrait"
                    layout='intrinsic'
                    priority
                    objectPosition = 'right bottom' 
                    />
            </div>
        </section>
    )
}
