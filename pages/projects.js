import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import styles from '../styles/projects.module.css'
import taskaholikSvgLogo from '../public/taskaholikSvgLogo.svg'
import pantamSvgLogo from '../public/pantamSvgLogo.svg'
import chartsourceSvgLogo from '../public/chartsourceSvgLogo.svg'
import quizitSvgLogo from '../public/quizitSvgLogo.svg'
import cryptosearchSvgLogo from '../public/cryptosearchSvgLogo.svg'
import Taskaholik from '../components/projects/Taskaholik'
import Pantam from '../components/projects/Pantam'
import Chartsource from '../components/projects/Chartsource'
import Quizit from '../components/projects/Quizit'
import Cryptosearch from '../components/projects/Cryptosearch'

export default function Projects() {

    const [selectedProject, setSelectedProject] = useState(0)
    
    const handleClick = (e) => {
        setSelectedProject(Number(e.target.dataset.id))
    }

    const displaySelectedProject = () => {
        switch (selectedProject) {
            case 0:
                return <Taskaholik />
            case 1:
                return <Pantam />
            case 2:
                return <Chartsource />
            case 3:
                return <Quizit />
            case 4:
                return <Cryptosearch />
            default:
                return "SELECT A PROJECT"
        }
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
                    src={taskaholikSvgLogo} 
                    data-id="0"
                    onClick={(e) => handleClick(e)}
                    alt="Taskaholic Logo"
                />
                <Image 
                    className={selectedProject === 1 ? styles.selected : null} 
                    src={pantamSvgLogo} 
                    data-id="1"
                    onClick={(e) => handleClick(e)}
                    alt="Pantam Logo"
                />
                <Image 
                    className={selectedProject === 2 ? styles.selected : null} 
                    src={chartsourceSvgLogo} 
                    data-id="2"
                    onClick={(e) => handleClick(e)}
                    alt="Chartsource Logo"
                />
                    <Image 
                    className={selectedProject === 3 ? styles.selected : null} 
                    src={quizitSvgLogo} 
                    data-id="3"
                    onClick={(e) => handleClick(e)}
                    alt="Quizit Logo"
                />
                <Image 
                    className={selectedProject === 4 ? styles.selected : null} 
                    src={cryptosearchSvgLogo} 
                    data-id="4"
                    onClick={(e) => handleClick(e)}
                    alt="Cryptosearch Logo"
                />
            </div>
                <section className={styles.project_display}>
                            {displaySelectedProject()}
                </section>
        </motion.div>
    )
}
