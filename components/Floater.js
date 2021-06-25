import React from 'react'
import styles from '../styles/Layout.module.css'

export default function Floater({ size, location }) {
    return (
        <>
            <div 
                className={styles.floater_container}
                style={{ width: size, height: size, left: `${location}%` }}  
            >
                <div 
                    className={styles.floater}
                    style={{ width: size, height: size }}    
                >
                </div>
            </div>
        </>
    )
}
