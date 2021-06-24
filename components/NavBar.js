import React, { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from '../styles/NavBar.module.css'
import logo from '../public/SVGLogo.svg'

export default function NavBar() {

    const router = useRouter()
    
    function moveBar(target) {
        const bar = document.getElementsByClassName(`${styles.bar}`)[0]
        bar.style.left = `${target.offsetLeft}px`;
        bar.style.width = `${target.offsetWidth}px`;
        console.log(target.offsetWidth)
    }

    useEffect(() => {
        const active = document.getElementsByClassName(`${styles.active}`)[0]
        moveBar(active)
    })

    return (
        <nav className={styles.nav_bar}>
             <div className={styles.logo}>
                <Image
                    src={logo}
                    alt='Logo'
                ></Image>
            </div>
            <div className={styles.nav_links}>
                <div className={styles.bar}></div>
                <Link href='/'>
                    <a 
                        className={router.pathname == '/' ? `${styles.active}` : null}
                        onClick={(e) => moveBar(e.target)} 
                    >
                        Home
                    </a> 
                </Link>
                <Link href='/projects'>
                    <a 
                        className={router.pathname == '/projects' ? `${styles.active}` : null} 
                        onClick={(e) => moveBar(e.target)} 
                    >
                        Projects
                    </a> 
                </Link>
                <Link href='/about'>
                    <a 
                        className={router.pathname == '/about' ? `${styles.active}` : null} 
                        onClick={(e) => moveBar(e.target)} 
                    >
                        About Me
                    </a> 
                </Link>
                <Link href='/resume'>
                    <a 
                        className={router.pathname == '/resume' ? `${styles.active}` : null} 
                        onClick={(e) => moveBar(e.target)} 
                    >
                        Resume
                    </a> 
                </Link>
                <Link href='/contact'>
                    <a 
                        className={router.pathname == '/contact' ? `${styles.active}` : null} 
                        onClick={(e) => moveBar(e)} 
                    >
                        Contact
                    </a> 
                </Link>
            </div>
        </nav>
    )
}
