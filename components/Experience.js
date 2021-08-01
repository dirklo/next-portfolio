import React from 'react'
import styledJsx from '../styles/Experience.styles'

export default function Experience() {
    return (
        <div
            className={`${styledJsx.className} container`}
        >
            <div
                className={`${styledJsx.className} experience_container`}
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
            </div>
            {styledJsx.styles}  
        </div>
    )
}
