import React from 'react'
import { motion } from 'framer-motion'

export default function about() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            I AM ABOUT ME
        </motion.div>
    )
}
