import React from 'react'
import styles from '../styles/Layout.module.css'

export default function Floater({ size, travelSpeed, spinSpeed, location }) {
    return (
        <>
            <div 
                className={styles.floater_container}
                style={{ width: size, height: size, animationName: 'travel', animationDuration: `${travelSpeed}s`, left: `${location}%` }}  
            >
                <div 
                    className={styles.floater}
                    style={{ width: size, height: size, animationName: 'spin', animationDuration: `${spinSpeed}s` }}    
                >
                </div>
            </div>
        </>
    )
}
