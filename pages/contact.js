import React from 'react'
import { motion } from 'framer-motion'

export default function contact() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            I AM CONTACT PAGE
        </motion.div>
    )
}
