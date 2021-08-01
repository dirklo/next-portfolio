import React from 'react'
import styledJsx from '../styles/Skills.styles'
import { skills, pickIcon } from '../data/skillsData'

export default function Skills() {
    return (
        <div
            className={`${styledJsx.className} container`}
        >
            {skills.map((skill, index) =>
                <div
                    key={index}
                    className={`${styledJsx.className} skill_card`}
                >
                    <div
                        className={`${styledJsx.className} skill_card_logo`}
                    >
                        {pickIcon(skill.icon)}
                    </div>
                    <h2
                        className={`${styledJsx.className} skill_card_h2`}
                    >
                        {skill.name}
                    </h2>
                </div>
            )}
            {styledJsx.styles}
        </div>
    )
}
