import React from 'react'
import styledJsx from '../styles/Education.styles'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Education() {
    return (
        <motion.div
            className={`${styledJsx.className} container`}
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
        >
            <section
                className={`${styledJsx.className} traditional_container`}
            >
                <h1
                    className={`${styledJsx.className} section_title`}
                >
                    Traditional Education
                </h1>
                <div
                    className={`${styledJsx.className} education_card`}
                    >
                    <Image 
                        src='/flatiron.svg' 
                        alt='Flatiron School'
                        width='92'
                        height='69'
                        layout='fixed'
                    />
                    <h2
                        className={`${styledJsx.className} education_card_h2`}
                        >
                        Flatiron School 
                    </h2>
                    <h3
                        className={`${styledJsx.className} education_card_h3`}
                        >
                        Full Stack Software Engineering
                    </h3>
                    <div
                        className={`${styledJsx.className} education_card_dates`}
                        >
                        December 2020 - May 2021
                    </div>
                </div>
                <div
                    className={`${styledJsx.className} education_card`}
                    >
                    <Image 
                        src='/berklee.png' 
                        alt='Flatiron School'
                        width='199'
                        height='69'
                        layout='fixed'
                    />
                    <h2
                        className={`${styledJsx.className} education_card_h2`}
                        >
                        Berklee College of Music    
                    </h2>
                    <h3
                        className={`${styledJsx.className} education_card_h3`}
                        >
                        Bachelors of Music, Music Production and Engineering
                    </h3>
                    <div
                        className={`${styledJsx.className} education_card_dates`}
                        >
                        August 2004 - May 2007
                    </div>
                </div>
            </section>
            <section
                className={`${styledJsx.className} self-study_container`}
            >
                <h1
                    className={`${styledJsx.className} section_title`}
                >
                    Self-Study Courses
                </h1>
                <div
                    className={`${styledJsx.className} education_card`}
                >
                    <Image 
                        src='/udemy.svg' 
                        alt='Flatiron School'
                        width='144'
                        height='42'
                        layout='fixed'
                    />
                    <h2
                        className={`${styledJsx.className} education_card_h2`}
                    >
                        Udemy.com
                    </h2>
                    <h3
                        className={`${styledJsx.className} education_card_h3`}
                    >
                        JavaScript: The Advanced Concepts (2021)
                    </h3>
                    <div
                        className={`${styledJsx.className} education_card_dates`}
                    >
                        Completed April 2021
                    </div>
                </div>
                <div
                    className={`${styledJsx.className} education_card`}
                >
                    <Image 
                        src='/udemy.svg' 
                        alt='Flatiron School'
                        width='144'
                        height='42'
                        layout='fixed'
                    />
                    <h2
                        className={`${styledJsx.className} education_card_h2`}
                    >
                        Udemy.com
                    </h2>
                    <h3
                        className={`${styledJsx.className} education_card_h3`}
                    >
                        The Web Developer Bootcamp (2020)
                    </h3>
                    <div
                        className={`${styledJsx.className} education_card_dates`}
                    >
                        Completed November 2020
                    </div>
                </div>
                <div
                    className={`${styledJsx.className} education_card`}
                >
                    <Image 
                        src='/udemy.svg' 
                        alt='Flatiron School'
                        width='144'
                        height='42'
                        layout='fixed'
                    />
                    <h2
                        className={`${styledJsx.className} education_card_h2`}
                    >
                        Udemy.com
                    </h2>
                    <h3
                        className={`${styledJsx.className} education_card_h3`}
                    >
                        2020 Complete Python Bootcamp: From Zero to Hero in Python
                    </h3>
                    <div
                        className={`${styledJsx.className} education_card_dates`}
                    >
                        Completed October 2020
                    </div>
                </div>
                <div
                    className={`${styledJsx.className} education_card`}
                >
                    <Image 
                        src='/udemy.svg' 
                        alt='Flatiron School'
                        width='144'
                        height='42'
                        layout='fixed'
                    />
                    <h2
                        className={`${styledJsx.className} education_card_h2`}
                    >
                        Udemy.com
                    </h2>
                    <h3
                        className={`${styledJsx.className} education_card_h3`}
                    >
                        The Complete SQL Bootcamp: From Zero to Hero
                    </h3>
                    <div
                        className={`${styledJsx.className} education_card_dates`}
                    >
                        Completed September 2020
                    </div>
                </div>
            </section>
            {styledJsx.styles}  
        </motion.div>
    )
}
