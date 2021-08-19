import { React, useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import styles from '../styles/Layout.module.css'

const Layout = ({ children }) => {
    const [ width, setWidth ] = useState(0)
  
    function setWindowWidth() {
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        setWindowWidth()
        window.addEventListener('resize', setWindowWidth)
    }, [])

    return (
        <div className={styles.content}>
            {width >= 1320 && <NavBar />} 
            { children }
        </div>
    )
}

export default Layout
