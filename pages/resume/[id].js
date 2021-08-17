import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion'
import { useRouter } from 'next/router'
import styledJsx from '../../styles/resume.styles'
import Testimonials from '../../components/Testimonials'
import Skills from '../../components/Skills'
import Experience from '../../components/Experience'
import Education from '../../components/Education'
import ResumeButton from '../../components/ResumeButton'
import { GiTeamIdea, GiTeamUpgrade, GiDiploma } from 'react-icons/gi'
import { FaLaptopCode } from 'react-icons/fa'

export default function Resume() {
    
    const router = useRouter()
    const controls = useAnimation()

    const selectResumeItem = () => {
        switch (router.query.id) {
            case 'testimonials':
                return <Testimonials />
            case 'skills':
                return <Skills />
            case 'experience':
                return <Experience />
            case 'education':
                return <Education />
        }
    }

    const handleClick = (e) => {
        controls.start('hidden')
        setTimeout(() => {
            controls.start('visible')
            router.push({
                pathname: `/resume/${e.target.dataset.id}`,
            }, undefined, { scroll: false })
        }, 500)
    }

    const zoomOut = {
        hidden: {
            opacity: 0,
            y: 500,
            transition: { duration: .5 }
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0 }
        }
    };

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
            </div>
            <div className={`${styledJsx.className} right_pane`}>
                <div
                    className={`${styledJsx.className} resume_buttons`}
                >
                    <ResumeButton title='Testimonials' icon='GiTalk' handleClick={handleClick} />
                    <ResumeButton title='Skills' icon='GiSkills' handleClick={handleClick}/>
                    <ResumeButton title='Experience' icon='CgWorkAlt' handleClick={handleClick}/>
                    <ResumeButton title='Education' icon='FaGraduationCap' handleClick={handleClick}/>
                </div>
                <motion.div
                    className={`${styledJsx.className} resume_display`}
                    variants={zoomOut}
                    initial='visible'
                    animate={controls}    
                >
                    {selectResumeItem()}
                </motion.div>
            </div>
            {styledJsx.styles}
        </motion.div>
    )
}
