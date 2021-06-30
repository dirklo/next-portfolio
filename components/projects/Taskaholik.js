import React from 'react'
import Image from 'next/image'
import styles from '../../styles/projects.module.css'
import mockups from '../../public/TaskaholikMockups.png'
import javascriptSvgLogo from '../../public/javascriptSvgLogo.svg'
import reactSvgLogo from '../../public/reactSvgLogo.svg'
import reduxSvgLogo from '../../public/reduxSvgLogo.svg'
import railsSvgLogo from '../../public/railsSvgLogo.svg'


export default function Taskaholik() {
    return (
        <div className={styles.project}>   
            <section className={styles.left_pane}>
                <h1>Taskaholik</h1>
                <h2>Bug-tracker and team management application built with React and Ruby on Rails</h2>
                <p>
                    Put together a team, create a project, outline your goals and deadlines, and assign team members.
                        <br /><br />
                    Redux - Manages data across the application.
                        <br /><br />
                    Devise/JWT’s - Full user authentication by use of JSON Web Tokens.  
                        <br /><br />
                    React-query - Data fetching and memization.
                </p>
            </section>
            <section className={styles.right_pane}>
                <div className={styles.techlist}>
                    <Image src={javascriptSvgLogo} height="60"></Image>
                    <Image src={reactSvgLogo} height="60"></Image>
                    <Image src={reduxSvgLogo} height="60"></Image>
                    <Image src={railsSvgLogo} height="60"></Image>
                </div>
                <Image src={mockups} alt="Taskaholic Mockups" />
            </section>
        </div>
    )
}
