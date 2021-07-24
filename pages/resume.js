import Image from 'next/image'
import { motion } from 'framer-motion'
import styledJsx from '../styles/resume.styles'


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
                        <div
                            className={`${styledJsx.className} profile_image`}
                            >
                            <Image 
                                alt='Profile'
                                src='/profile.jpg'
                                layout='fill'
                                objectFit='contain'
                                />
                        </div>
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
                    <p
                        className={`${styledJsx.className} description`}
                    >Dedicated to finding unique solutions to the challenges facing businesses today.  Proven success in team engagement and empowerment.  Passionate about learning new technologies and creating diverse, superstar teams to simplify solutions and create unforgettable user experiences.  Committed to engineering best practices and creating clean, maintainable code, and rock-solid back end designs for scalable and dependable software</p>
                </div>
            </div>
            <div className={`${styledJsx.className} right_pane`}>
                
            </div>
            {styledJsx.styles}
        </motion.div>
    )
}
