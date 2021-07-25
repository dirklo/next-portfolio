import Image from 'next/image'
import { motion } from 'framer-motion'
import styledJsx from '../styles/resume.styles'
import { GiTeamIdea, GiTeamUpgrade, GiDiploma } from 'react-icons/gi'
import { FaLaptopCode } from 'react-icons/fa'


export default function resume() {
    return (
        <motion.div
            className={`${styledJsx.className} resume`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className={`${styledJsx.className} left_pane`}>
                <div
                    className={`${styledJsx.className} intro_card`}
                >
                    <div
                        className={`${styledJsx.className} profile_div`}
                    >
                        <Image 
                            alt='Profile'
                            src='/profile2.jpg'
                            layout='intrinsic'
                            width='193'
                            height='257'
                            />
                        <div 
                            className={`${styledJsx.className} profile_name_div`}
                        >
                            <h1
                                className={`${styledJsx.className} profile_name`}
                            >
                                Rick Moore
                            </h1>
                            <h2
                                className={`${styledJsx.className} profile_subtitle`}
                            >
                                Web Developer and Software Engineer
                            </h2>
                        </div>
                    </div>
                    <div
                        className={`${styledJsx.className} resume_card`}
                    >
                        <span
                            className={`${styledJsx.className} resume_card_span`}
                        >
                            Dedicated to finding unique solutions to the challenges facing businesses today.
                        </span>
                        <GiTeamIdea color="white" size="4em" />
                    </div>
                    <hr />
                    <div
                        className={`${styledJsx.className} resume_card`}
                    >
                        <span
                            className={`${styledJsx.className} resume_card_span`}
                        >
                            Proven success engaging and empowering diverse, superstar teams.
                        </span>
                        <GiTeamUpgrade color="white" size="4em" />
                    </div>
                    <hr />
                    <div
                        className={`${styledJsx.className} resume_card`}
                    >
                        <span
                            className={`${styledJsx.className} resume_card_span`}
                        >
                            Passionate about learning new technologies, and consistently self-improving.
                        </span>
                        <GiDiploma color="white" size="4em" />
                    </div>
                    <hr />
                    <div
                        className={`${styledJsx.className} resume_card`}
                    >
                        <span
                            className={`${styledJsx.className} resume_card_span`}
                        >
                            Committed to engineering best practices and creating clean, maintainable code.
                        </span>
                        <FaLaptopCode color="white" size="4em" />
                    </div>
                    
                        
                        
                </div>
            </div>
            <div className={`${styledJsx.className} right_pane`}>
                
            </div>
            {styledJsx.styles}
        </motion.div>
    )
}
