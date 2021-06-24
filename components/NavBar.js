import React, { useState} from 'react'
import Link from 'next/link'
import styles from '../styles/NavBar.module.css'

export default function NavBar() {
    return (
        <div className={styles.nav_bar}>
            <div className={styles.nav_links}>
                <Link href='/projects'>Projects</Link>
                <Link href='/about'>About Me</Link>
                <Link href='/resume'>Resume</Link>
                <Link href='/contact'>Contact</Link>
            </div>
        </div>
    )
}
