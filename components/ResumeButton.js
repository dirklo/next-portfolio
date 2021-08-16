import { useRouter } from 'next/router'
import styledJsx from '../styles/ResumeButton.styles'
import { motion } from 'framer-motion'
import { GiTalk, GiSkills } from 'react-icons/gi'
import { FaGraduationCap } from 'react-icons/fa'
import { CgWorkAlt } from 'react-icons/cg'

export default function ResumeButton({ title, icon }){
    const router = useRouter()

    const handleClick = (e) => {
        console.log(e.target.dataset.id)
        router.push({
            pathname: `/resume/${e.target.dataset.id}`,
        }, undefined, { scroll: false })
    }

    const slug = title.toLowerCase()
    const pickIcon = () => {
        switch (icon) {
            case 'GiTalk':
                return <GiTalk 
                    color={router.query.id === 'testimonials' ? 'gold' : 'white'} 
                    size='2em' 
                    style={{ pointerEvents: 'none' }}
                />
            case 'GiSkills':
                return <GiSkills 
                    color={router.query.id === 'skills' ? 'gold' : 'white'} 
                    size='2em' 
                    style={{ pointerEvents: 'none' }}
                />
            case 'CgWorkAlt':
                return <CgWorkAlt 
                    color={router.query.id === 'experience' ? 'gold' : 'white'} 
                    size='2em' 
                    style={{ pointerEvents: 'none' }}    
                />
            case 'FaGraduationCap':
                return <FaGraduationCap 
                    color={router.query.id === 'education' ? 'gold' : 'white'} 
                    size='2em' 
                    style={{ pointerEvents: 'none' }}
                />
        }
    }
    return (
        <motion.div
            className={`${styledJsx.className} resume_button ${router.query.id === slug ? 'selected' : null}`}
            onClick={(e) => handleClick(e)}
            data-id={slug}
            whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 }
            }}
        >
            {pickIcon(icon)}
            <span
                className={`${styledJsx.className} resume_button_span ${router.query.id === slug ? 'selected_text' : null}`}
                style={{ pointerEvents: 'none' }}
            >
                {title}
            </span>
            {styledJsx.styles}
        </motion.div>
    )
}