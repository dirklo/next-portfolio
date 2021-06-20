import React from 'react'
import styles from '../styles/Landing.module.css'
import portrait from '../public/portrait.png'
import Image from 'next/image'

export default function Landing() {
    return (
        <section className={styles.landing}>
            <h1>Rick Moore</h1>
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
