import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import styles from '../styles/projects.module.css'
import projects from '../data/projects'
import ProjectTemplate from '../components/ProjectTemplate'

export default function Projects() {

    const [selectedProject, setSelectedProject] = useState(0)
    
    const handleClick = (e) => {
        setSelectedProject(Number(e.target.dataset.id))
    }

    return (
        <motion.div
            className={styles.projects}
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
        >
            <div className={styles.project_select}>
                <Image 
                    className={selectedProject === 0 ? styles.selected : null} 
                    src='/taskaholikSvgLogo.svg'
                    layout='fixed'
                    height='40' 
                    width='40' 
                    data-id="0"
                    onClick={(e) => handleClick(e)}
                    alt="Taskaholic Logo"
                />
                <Image 
                    className={selectedProject === 1 ? styles.selected : null} 
                    src='/pantamSvgLogo.svg'
                    layout='fixed'
                    height='40'
                    width='40'   
                    data-id="1"
                    onClick={(e) => handleClick(e)}
                    alt="Pantam Logo"
                />
                <Image 
                    className={selectedProject === 2 ? styles.selected : null} 
                    src='/chartsourceSvgLogo.svg'
                    layout='fixed'
                    height='40'
                    width='40'  
                    data-id="2"
                    onClick={(e) => handleClick(e)}
                    alt="Chartsource Logo"
                />
                <Image 
                    className={selectedProject === 3 ? styles.selected : null} 
                    src='/quizitSvgLogo.svg'
                    layout='fixed'
                    height='40'
                    width='40'  
                    data-id="3"
                    onClick={(e) => handleClick(e)}
                    alt="Quizit Logo"
                />
                <Image 
                    className={selectedProject === 4 ? styles.selected : null} 
                    src='/cryptosearchSvgLogo.svg'
                    layout='fixed'
                    height='40'
                    width='40'  
                    data-id="4"
                    onClick={(e) => handleClick(e)}
                    alt="Cryptosearch Logo"
                />
            </div>
            <section className={styles.project_display}>
                    <ProjectTemplate 
                        key={projects[selectedProject].title} 
                        project={projects[selectedProject]}
                    />
            </section>
        </motion.div>
    )
}
