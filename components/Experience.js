import React from 'react'
import styledJsx from '../styles/Experience.styles'

export default function Experience() {
    return (
        <div
            className={`${styledJsx.className} container`}
        >
            <div
                className={`${styledJsx.className} experience_card`}
            >
                I AM AN EXPERIENCE
            </div>
            {styledJsx.styles}  
        </div>
    )
}
