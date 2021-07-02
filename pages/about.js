import React from 'react'
import { motion } from 'framer-motion'
import styles from '../styles/about.module.css'
import StoryCard from '../components/StoryCard'
import stories from '../data/stories'

export default function StoryContainer(props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }} 
            className={styles.about}
        >
            <h1>My Story</h1>
            <div className="story-list">
                {stories.map((story, index) => <StoryCard
                    key={index}
                    content={story.content}
                    image={story.image}
                    direction={story.direction}
                />)}
            </div>
        </motion.div>
    )
}
