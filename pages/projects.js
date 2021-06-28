import React from 'react'
import {AnimatePresense, motion} from 'framer-motion'

export default function projects() {
    return (
        <motion.div
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
        >
            THIS IS PROJECT PAGE
        </motion.div>
    )
}
