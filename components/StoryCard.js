import React from 'react'
import Image from 'next/image'
import styles from '../styles/about.module.css'

export default function StoryCard(props) {
    return (
        <>
            <div className={styles.story_card}
            >
                <div>{props.content}</div>
            </div>
        </>
    )
}
