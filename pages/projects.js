import React from 'react'
import {AnimatePresense, motion} from 'framer-motion'
import styles from '../styles/projects.module.css'

export default function projects() {
    return (
        <motion.div
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
        >
            <div className={styles.project_select}>
                I AM PROJECT SELECT
            </div>
        
        </motion.div>
    )
}
