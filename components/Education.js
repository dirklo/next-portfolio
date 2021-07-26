import React from 'react'
import styledJsx from '../styles/Education.styles'

export default function Education() {
    return (
        <div
            className={`${styledJsx.className} container`}
        >
            <div
                className={`${styledJsx.className} education_card`}
            >
                I AM AN EDUCATION
            </div>
            {styledJsx.styles}  
        </div>
    )
}
