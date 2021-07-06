import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import styles from '../../styles/projects.module.css'
import projects from '../../data/projects'
import ProjectTemplate from '../../components/ProjectTemplate'

export default function Projects() {
    
    const router = useRouter()

    const handleClick = (e) => {
            router.push(`/projects/${e.target.dataset.id}`)
    }

    return (
        <motion.div
            className={styles.projects}
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0}}
        >
            <div className={styles.project_select}>
                <Image 
                    className={router.query.id === 'taskaholik' ? styles.selected : null} 
                    src='/taskaholikSvgLogo.svg'
                    layout='fixed'
                    height='40' 
                    width='40' 
                    data-id="taskaholik"
                    onClick={(e) => handleClick(e)}
                    alt="Taskaholic Logo"
                />
                <Image 
                    className={router.query.id === 'pantam' ? styles.selected : null} 
                    src='/pantamSvgLogo.svg'
                    layout='fixed'
                    height='40'
                    width='40'   
                    data-id="pantam"
                    onClick={(e) => handleClick(e)}
                    alt="Pantam Logo"
                />
                <Image 
                    className={router.query.id === 'chartsource' ? styles.selected : null} 
                    src='/chartsourceSvgLogo.svg'
                    layout='fixed'
                    height='40'
                    width='40'  
                    data-id="chartsource"
                    onClick={(e) => handleClick(e)}
                    alt="Chartsource Logo"
                />
                <Image 
                    className={router.query.id === 'quizit' ? styles.selected : null} 
                    src='/quizitSvgLogo.svg'
                    layout='fixed'
                    height='40'
                    width='40'  
                    data-id="quizit"
                    onClick={(e) => handleClick(e)}
                    alt="Quizit Logo"
                />
                <Image 
                    className={router.query.id === 'cryptosearch' ? styles.selected : null} 
                    src='/cryptosearchSvgLogo.svg'
                    layout='fixed'
                    height='40'
                    width='40'  
                    data-id="cryptosearch"
                    onClick={(e) => handleClick(e)}
                    alt="Cryptosearch Logo"
                />
            </div>
            {router.query.id ?
                <section
                    className={styles.project_display}
                >
                    <ProjectTemplate 
                        key={projects[router.query.id].title} 
                        project={projects[router.query.id]}
                    />
                </section>
            : null
            }
        </motion.div>
    )
}
