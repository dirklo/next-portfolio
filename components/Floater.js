import React, { useState, useLayoutEffect } from 'react'
import styles from '../styles/Layout.module.css'
import { useSpring, animated } from 'react-spring'


export default function Floater() {

    const randomSpeed = () => Math.floor(Math.random() * 2000 + 5000)
    const size = Math.floor(Math.random() * 100 + 50)
    const location = Math.floor(Math.random() * 100)

    const spin = useSpring({
        loop: true,
        config: { duration: randomSpeed() },
        from: { 
            rotateZ: 0
        },
        to: {
            rotateZ: 360 
        }      
    })

    const travel = useSpring({
        loop: true,
        config: { duration: randomSpeed()*2 },
        from: {
            translateY: height + 150
        },
        to: {
            translateY: -150
        }   
    })

    return (
        <>
            <animated.div 
                className={styles.floater_container}
                style={{ width: size, height: size, left: `${location}%`, ...travel }}  
            >
                <animated.div
                    className={styles.floater}
                    style={{ width: size, height: size, ...spin }}    
                >
                </animated.div>
            </animated.div>
        </>
    )
}
