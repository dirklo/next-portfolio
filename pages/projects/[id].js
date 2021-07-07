import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import styledJsx from '../../styles/projects.styles'
import projects from '../../data/projects'
import ProjectTemplate from '../../components/ProjectTemplate'

export default function Projects() {
    
    const router = useRouter()

    const handleClick = (e) => {
        router.push(`/projects/${e.target.dataset.id}`)
    }

    const projectsArray = (projects) => {
        const result = []
        
        for (let project in projects) {
            result.push(projects[project])
        }
        return result
    }

    return (
        <motion.div
        className={`${styledJsx.className} projects`}
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0}}
        >
            <div className={`${styledJsx.className} project_select`}>
                {projectsArray(projects).map(project => {
                    const slug = project.title.toLowerCase().split('-').join('')
                    return (
                        <Image
                            className={router.query.id === slug ? 
                                `${styledJsx.className} project_select_icon selected` : 
                                `${styledJsx.className} project_select_icon`
                            }
                            key={project.title}
                            src={`/${slug}SvgLogo.svg`}
                            layout='fixed'
                            height='40' 
                            width='40' 
                            data-id={slug}
                            onClick={(e) => handleClick(e)}
                            alt={`${project.title} Logo`}
                        />
                    )
                })}
            </div>
            {router.query.id ?
                <section
                className={`${styledJsx.className} projectDisplay`}
                >
                    <ProjectTemplate 
                        key={projects[router.query.id].title} 
                        project={projects[router.query.id]}
                    />
                </section>
            : null
            }
        {styledJsx.styles}
        </motion.div>
    )
}
