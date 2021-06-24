import React from 'react'
import styles from '../styles/SocialContainer.module.css'
import Image from 'next/image'
import github from '../public/github.svg'
import linkedin from '../public/linkedin.svg'
import twitter from '../public/twitter.svg'

function SocialContainer() {
    return (
        <div className={styles.social_container}>
            <a 
                href="https://github.com/dirklo" 
                target="_blank" 
                rel="noreferrer"
            >
                <Image src={github} alt="github link" />
            </a>
            <a 
                href="https://www.linkedin.com/in/rick-moore-5b587a99/" 
                target="_blank" 
                rel="noreferrer"
            >
                <Image src={linkedin} alt="linkedin link" />
            </a>
            <a 
                href="https://twitter.com/rickstachemoore" 
                target="_blank" 
                rel="noreferrer"
            >
                <Image src={twitter} alt="twitter link" />
            </a>
        </div>
    )
}

export default SocialContainer
