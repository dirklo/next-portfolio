import React from 'react'
import socialContainerStyles from '../styles/SocialContainer.styles'
import Image from 'next/image'

function SocialContainer() {
    return (
        <div className={`${socialContainerStyles.className} social_container`}>
            <a 
                href="https://github.com/dirklo" 
                target="_blank" 
                rel="noreferrer"
            >
                <Image 
                    src='/github.svg' 
                    alt="Github Link"
                    layout='fixed'
                    height='64' 
                    width='64' 
                />
            </a>
            <a 
                href="https://www.linkedin.com/in/rick-moore-5b587a99/" 
                target="_blank" 
                rel="noreferrer"
            >
                <Image 
                    src='/linkedin.svg' 
                    alt="linkedin link" 
                    layout='fixed'
                    height='64' 
                    width='64' 
                />
            </a>
            <a 
                href="https://twitter.com/rickstachemoore" 
                target="_blank" 
                rel="noreferrer"
            >
                <Image 
                    src='/twitter.svg' 
                    alt="twitter link" 
                    layout='fixed'
                    height='64' 
                    width='64'     
                />
            </a>
            {socialContainerStyles.styles}
        </div>
    )
}

export default SocialContainer
