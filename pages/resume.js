import React from 'react'
import { motion } from 'framer-motion'

export default function resume() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            I AM RESUME
        </motion.div>
    )
}
