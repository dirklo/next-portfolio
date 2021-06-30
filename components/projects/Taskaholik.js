import React from 'react'
import Image from 'next/image'
import styles from '../../styles/projects.module.css'
import mockups from '../../public/TaskaholikMockups.png'


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
                <Image src={mockups} alt="Taskaholic Mockups" />
            </section>
        </div>
    )
}
