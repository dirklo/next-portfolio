import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import styledJsx from '../styles/about.styles'
import stories from '../data/stories'

export default function StoryContainer() {
    return (
        <motion.div
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            exit={{ opacity: 0 }} 
            className={`${styledJsx.className} about`}
        >
            <div className={`${styledJsx.className} avatar_container`}>
                <Image
                    src='/rick-avatar.svg'
                    alt='Avatar'
                    layout='fill'
                    objectFit='contain'
                />
                <h1 className={`${styledJsx.className} about_h1`}>
                    My Story
                </h1>
            </div>
            <div className={`${styledJsx.className} story_list`}>
                {stories.map((story, index) => 
                    <motion.div 
                        className={story.direction === 'right' ? 
                            `${styledJsx.className} story_card_right` : 
                            `${styledJsx.className} story_card_left`
                        }
                        key={index}
                        initial={story.direction === 'right' ? { x: 500 } : { x: -500 }}
                        animate={{ 
                            x: 0,
                            transition: { duration: 1 } 
                        }}
                        direction={story.direction}
                    >   
                        <div className={`${styledJsx.className} story_card_image_container`}>
                            <Image
                                src={story.image}
                                alt={`Story ${index + 1}`}
                                layout='fill'
                                objectFit='contain'
                            />
                        </div>
                        <div className={`${styledJsx.className} story_card_content`}>
                            {story.content}
                        </div>
                    </motion.div>
                )}
            </div>
            {styledJsx.styles}
        </motion.div>
    )
}
