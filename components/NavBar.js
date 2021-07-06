import React, { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from '../styles/NavBar.module.css'
import logo from '../public/SVGLogo.svg'
export default function NavBar() {

    const router = useRouter()
    
    function positionBar(target) {
        const bar = document.getElementsByClassName(`${styles.bar}`)[0]
        bar.style.left = `${target.offsetLeft}px`;
        bar.style.width = `${target.offsetWidth}px`;
    }

    useEffect(() => {
        const active = document.getElementsByClassName(`${styles.active}`)[0]
        positionBar(active)
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
                    >
                        Home
                    </a> 
                </Link>
                <Link href='/projects/taskaholik'>
                    <a 
                        className={router.pathname.includes('/projects') ? `${styles.active}` : null} 
                    >
                        Projects
                    </a> 
                </Link>
                <Link href='/blog'>
                    <a 
                        className={router.pathname == '/blog' ? `${styles.active}` : null} 
                    >
                        Blog
                    </a> 
                </Link>
                <Link href='/about'>
                    <a 
                        className={router.pathname == '/about' ? `${styles.active}` : null} 
                    >
                        About Me
                    </a> 
                </Link>
                <Link href='/resume'>
                    <a 
                        className={router.pathname == '/resume' ? `${styles.active}` : null} 
                    >
                        Resume
                    </a> 
                </Link>
                <Link href='/contact'>
                    <a 
                        className={router.pathname == '/contact' ? `${styles.active}` : null} 
                    >
                        Contact
                    </a> 
                </Link>
            </div>
        </nav>
    )
}
