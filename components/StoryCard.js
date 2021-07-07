import React from 'react'
import Image from 'next/image'
import styledJsx from '../styles/about.styles'

export default function StoryCard(props) {
    return (
        <>
            <div className={`${styledJsx.className} story_card`}>
                <div>{props.content}</div>
            </div>
            {styledJsx.styles}
        </>
    )
}
