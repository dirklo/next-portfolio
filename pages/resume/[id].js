import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion'
import { useRouter } from 'next/router'
import styledJsx from '../../styles/resume.styles'
import Testimonials from '../../components/Testimonials'
import { GiTeamIdea, GiTeamUpgrade, GiDiploma, GiTalk, GiSkills } from 'react-icons/gi'
import { FaLaptopCode, FaGraduationCap } from 'react-icons/fa'
import { GoArrowRight } from 'react-icons/go'
import { CgWorkAlt } from 'react-icons/cg'


export default function Resume() {
    
    const router = useRouter()
    const controls = useAnimation();

    const handleClick = (e) => {
        router.push(`/projects/${e.target.dataset.id}`)
    }

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
                        <GiTeamIdea color='white' size='4em' />
                    </div>
                    <div
                        className={`${styledJsx.className} resume_card`}
                    >
                        <span
                            className={`${styledJsx.className} resume_card_span`}
                        >
                            Proven success engaging and empowering diverse, superstar teams.
                        </span>
                        <GiTeamUpgrade color='white' size='4em' />
                    </div>
                    <div
                        className={`${styledJsx.className} resume_card`}
                    >
                        <span
                            className={`${styledJsx.className} resume_card_span`}
                        >
                            Passionate about learning new technologies, and consistently self-improving.
                        </span>
                        <GiDiploma color='white' size='4em' />
                    </div>
                    <div
                        className={`${styledJsx.className} resume_card`}
                    >
                        <span
                            className={`${styledJsx.className} resume_card_span`}
                        >
                            Committed to engineering best practices and creating clean, maintainable code.
                        </span>
                        <FaLaptopCode color='white' size='4em' />
                    </div>
                </div>
                <div
                    className={`${styledJsx.className} resume_buttons`}
                >
                    <div
                        className={`${styledJsx.className} resume_button`}
                        onClick={(e) => handleClick(e)}
                        data-id='testimonials'
                    >
                        <GiTalk color={router.query.id === 'testimonials' ? 'gold' : 'white'} size='2em' />
                        <span
                            className={`${styledJsx.className} resume_button_span`}
                        >
                            Testimonials
                        </span>
                        <GoArrowRight color='white' size='2em' />
                    </div>
                    <div
                        className={`${styledJsx.className} resume_button`}
                    >
                        <GiSkills color='white' size='2em' />
                        <span
                            className={`${styledJsx.className} resume_button_span`}
                        >
                            Skills
                        </span>
                        <GoArrowRight color='white' size='2em' />
                    </div>
                    <div
                        className={`${styledJsx.className} resume_button`}
                    >
                        <CgWorkAlt color='white' size='2em' />
                        <span
                            className={`${styledJsx.className} resume_button_span`}
                        >
                            Experience
                        </span>
                        <GoArrowRight color='white' size='2em' />
                    </div>
                    <div
                        className={`${styledJsx.className} resume_button`}
                    >
                        <FaGraduationCap color='white' size='2em' />
                        <span
                            className={`${styledJsx.className} resume_button_span`}
                        >
                            Education
                        </span>
                        <GoArrowRight color='white' size='2em' />
                    </div>
                </div>
            </div>
            <div className={`${styledJsx.className} right_pane`}>
                <Testimonials />
            </div>
            {styledJsx.styles}
        </motion.div>
    )
}
