import React from 'react'
import styledJsx from '../styles/Skills.styles'

export default function Skills() {
    return (
        <div
            className={`${styledJsx.className} container`}
        >
            <div
                className={`${styledJsx.className} skill_card`}
            >
                I AM A SKILL
            </div>
            {styledJsx.styles}  
        </div>
    )
}
