import React from 'react'
import styledJsx from '../styles/Testimonials.styles'
import Carousel from 'react-material-ui-carousel'
import testimonialsData from '../data/testimonialsData.json'
import { BsChatQuoteFill } from 'react-icons/bs'

export default function Testimonials() {
    return (
        <div
            className={`${styledJsx.className} container`}
        >
            <Carousel interval='50000'>
                {testimonialsData.map((testimonial, index) => {
                    return (
                        <div
                            className={`${styledJsx.className} testimonial_card`}
                            key={index}
                        >
                            <div
                                className={`${styledJsx.className} testimonial_card_icon`}
                            >
                                <BsChatQuoteFill size='100px' color='gold' opacity='50%'/>
                            </div>
                            <h2 className={`${styledJsx.className} testimonial_card_h2`}>
                                {testimonial.name}
                            </h2>
                            <h3 className={`${styledJsx.className} testimonial_card_h3`}>
                                {testimonial.method}
                            </h3>
                            <span className={`${styledJsx.className} testimonial_card_quote`}>
                                {testimonial.quote}
                            </span><br />
                            <span className={`${styledJsx.className} testimonial_card_date`}>
                                {testimonial.date}
                            </span>
                        </div>
                    )
                })}
            </Carousel>
            
            {styledJsx.styles}  
        </div>
    )
}
