import React from 'react'
import styledJsx from '../styles/Skills.styles'
import { skills, pickIcon } from '../data/skillsData'
import { motion } from 'framer-motion'
import { delay } from 'q'

export default function Skills() {
    const buildVariants = (dir, delay) => {
        return {
            moved: dir === 'left' ? {x: -500, opacity: 0} : {x: 500, opacity: 0},
            positioned: {
                x: 0,
                y: 0,
                opacity: 1,
                transition: {
                    type: 'spring',
                    stiffness: 20,
                    delay: delay
                }
            }
        } 
    }

    return (
        <motion.div
            className={`${styledJsx.className} container`}
            initial={{ opacity: 0 }}
            animate={
                { 
                    opacity: 1
                }
            }

        >
            {skills.map((skill, index) =>
                <motion.div
                    key={index}
                    className={`${styledJsx.className} skill_card`}
                    initial="moved" 
                    animate="positioned"
                    variants={buildVariants((index % 2 === 0 ? 'left' : 'right'), index * 0.05)}
                >
                    <div
                        className={`${styledJsx.className} skill_card_logo`}
                    >
                        {pickIcon(skill.icon)}
                    </div>
                    <h2
                        className={`${styledJsx.className} skill_card_h2`}
                    >
                        {skill.name}
                    </h2>
                </motion.div>
            )}
            {styledJsx.styles}
        </motion.div>
    )
}
