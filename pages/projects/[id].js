import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { motion, useAnimation } from 'framer-motion'
import styledJsx from '../../styles/projects.styles'
import projects from '../../data/projects.json'
import ProjectTemplate from '../../components/ProjectTemplate'

export default function Projects() {
    
    const router = useRouter()
    const controls = useAnimation();

    const handleClick = (e) => {
        controls.start('hidden')
        setTimeout(() => {
            controls.start('visible')
            router.push({
                pathname: `/projects/${e.target.dataset.id}`,
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

    const selectedProject = () => {
        const id = router.query.id 
        return projects.filter(project => id === project.slug)[0]
    }

    return (
        <motion.div
            className={`${styledJsx.className} projects`}
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0}}
        >
            <h2 className={`${styledJsx.className} projects_h2`}> 
                Select a Project 
            </h2>
            <div className={`${styledJsx.className} project_select`}>
                {projects.map(project => {
                    return (
                        <motion.div 
                            key={project.slug} 
                            className={`${styledJsx.className} project_select_icon`}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ 
                                scale: 0.9, 
                                transition: { duration: 0 }
                            }}
                        >
                            <Image
                                className={router.query.id === project.slug ? 
                                    `${styledJsx.className} selected` : null
                                }
                                src={`/${project.slug}SvgLogo.svg`}
                                layout='fill'
                                objectFit='contain'
                                data-id={project.slug}
                                onClick={(e) => handleClick(e)}
                                alt={`${project.title} Logo`}
                            />
                        </motion.div>
                    )
                })}
            </div>
            {router.query.id ?
                <motion.section
                    className={`${styledJsx.className} projectDisplay`}
                    variants={zoomOut}
                    initial='visible'
                    animate={controls}
                >
                    <ProjectTemplate 
                        key={selectedProject().slug} 
                        project={selectedProject()}
                    />
                </motion.section>
            : null
            }
            {styledJsx.styles}
        </motion.div>
    )
}