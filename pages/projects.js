import React, { useState } from 'react'
import Image from 'next/image'
import {AnimatePresense, motion} from 'framer-motion'
import styles from '../styles/projects.module.css'
import taskaholikSvgLogo from '../public/taskaholikSvgLogo.svg'
import pantamSvgLogo from '../public/pantamSvgLogo.svg'
import chartsourceSvgLogo from '../public/chartsourceSvgLogo.svg'
import quizitSvgLogo from '../public/quizitSvgLogo.svg'
import cryptosearchSvgLogo from '../public/cryptosearchSvgLogo.svg'

export default function Projects() {

    const [selectedProject, setSelectedProject] = useState(0)

    return (
        <motion.div
            className={styles.projects}
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
        >
            <div className={styles.project_select}>
                <Image src={taskaholikSvgLogo} alt="Taskaholic Logo" />
                <Image src={pantamSvgLogo} alt="Taskaholic Logo" />
                <Image src={chartsourceSvgLogo} alt="Taskaholic Logo" />
                <Image src={quizitSvgLogo} alt="Taskaholic Logo" />
                <Image src={cryptosearchSvgLogo} alt="Taskaholic Logo" />
            </div>
        </motion.div>
    )
}
