import React from 'react'
import styledJsx from '../styles/Experience.styles'
import { motion } from 'framer-motion'

export default function Experience() {
    return (
        <div
            className={`${styledJsx.className} container`}
        >
            <motion.div
                className={`${styledJsx.className} experience_container`}
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
            >
                <div
                    className={`${styledJsx.className} experience_card`}
                >
                    <h2
                        className={`${styledJsx.className} experience_card_h2`}
                    >
                        Carnival Cruise Line
                    </h2>
                    <h3
                        className={`${styledJsx.className} experience_card_h3`}
                    >
                        Operational Manager (Music Department)
                    </h3>
                    <div
                        className={`${styledJsx.className} experience_card_dates`}
                    >
                        July 2014 - March 2020    
                    </div>
                    <ul>
                        <li>
                            Worked shipboard contracts, focusing on quality assurance and process improvement.
                        </li>
                        <li>
                            Implemented design thinking to redefine problems and consistently improve products and department workflow.
                            <ul>
                                <li>
                                    Established feedback loops between guests, team members and management to drive team focus and direction. 
                                </li>
                                <li>
                                    Implemented agile/scrum ideology to the workspace in order to to maximize team strength and mutual collaboration.
                                </li>
                                <li>
                                    Created consistent increase in guest survey ratings through empowering team members, leading by example, and opening lines of communication.
                                </li>
                            </ul>
                        </li>
                        <li>
                            Served in Operations Director capacity, responsibilities included:
                            <ul>
                                <li>
                                    Compilation and final approval of daily ship schedule for guests.
                                </li>
                                <li>
                                    Rolling out of new initiatives, and compiling meaningful feedback reports on their impact.
                                </li>
                                <li>
                                    Representing the department to shipboard management.
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div
                    className={`${styledJsx.className} experience_card`}
                >
                    <h2
                        className={`${styledJsx.className} experience_card_h2`}
                    >
                        Great Modulator Productions
                    </h2>
                    <h3
                        className={`${styledJsx.className} experience_card_h3`}
                    >
                        Engineer and Co-owner
                    </h3>
                    <div
                        className={`${styledJsx.className} experience_card_dates`}
                    >
                        August 2009 - July 2014    
                    </div>
                    <ul>
                        <li>
                            Worked with musical artists to record, mix and master over 50 full-length albums.  
                        </li>
                        <li>
                            Provided technical oversight and equipment management.
                        </li>
                    </ul>
                </div>
                <div
                    className={`${styledJsx.className} experience_card`}
                >
                    <h2
                        className={`${styledJsx.className} experience_card_h2`}
                    >
                        Bose Corporation
                    </h2>
                    <h3
                        className={`${styledJsx.className} experience_card_h3`}
                    >
                        Product and Technical Support Specialist II
                    </h3>
                    <div
                        className={`${styledJsx.className} experience_card_dates`}
                    >
                        July 2007 - August 2009    
                    </div>
                    <ul>
                        <li>
                            Provided technical support to over 70 customers daily.
                        </li>
                        <li>
                            Implemented feedback loops with R&D to continually improve product lines.
                        </li>
                    </ul>
                </div>
            </motion.div>
            {styledJsx.styles}  
        </div>
    )
}
