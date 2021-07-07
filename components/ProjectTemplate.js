import React from 'react'
import Image from 'next/image'
import styledJsx from '../styles/projects.styles.js'
import { motion } from 'framer-motion'

export default function ProjectTemplate({ project }) {

    return (
        <motion.div
            key={project.title} 
            className={`${styledJsx.className} project`}
        >   
            <motion.section 
                className={`${styledJsx.className} left_pane`}
                initial={{ x: -500 }}
                animate={{ x: 0 }}
                transition={{
                    type: 'spring',
                    duration: .8,
                    staggerChildren: 0.5
                }}
            >
                <h1>{project.title}</h1>
                <h2>{project.description}</h2>
                <p>
                    {project.subDescription}
                    <br /><br />
                    {project.details.map((detail, index) => 
                        <span key={index}>
                            <em><b>{detail.title}</b></em> - {detail.description}
                            <br /><br />
                        </span>
                    )}
                </p> 
                <div className={`${styledJsx.className} cta_buttons`}>
                    <motion.button
                        type="button"
                        onClick={() => {
                            window.open(`${project.codeUrl}`, '_blank')
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ backgroundColor: '#062f36' }}
                    >
                        View Code
                    </motion.button>
                    {   
                        project.liveUrl ? 
                            <motion.button
                                type="button"
                                onClick={() => {
                                    window.open(`${project.liveUrl}`, '_blank')
                                }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ backgroundColor: '#1c0f41' }}
                                >
                                Live App
                            </motion.button>
                        : null
                    }
                </div>
            </motion.section>
            <motion.section 
                className={`${styledJsx.className} right_pane`}
                initial={{ x: 1000 }}
                animate={{ x: 0 }}
                transition={{
                    type: 'spring',
                    delay: .3,
                    duration: .6
                }}
            >
                <div className={`${styledJsx.className} techlist`}>
                    {project.techs.map((tech, index) => 
                        <Image 
                            src={tech.svgUrl}
                            key={index} 
                            height='60' 
                            width='60' 
                            layout='fixed' 
                            alt={tech.altText}
                        />
                    )}
                </div>
                <Image 
                    src={project.mockup.url} 
                    alt={`${project.title} Mockups`} 
                    height={project.mockup.height} 
                    width={project.mockup.width} 
                    layout='fixed'
                    priority='true'
                />
            </motion.section>
        </motion.div>
    )
}
