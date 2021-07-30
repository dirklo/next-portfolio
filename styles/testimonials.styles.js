import css from 'styled-jsx/css'

export default css.resolve`
    .container {
        background: transparent;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .testimonial_card {
        position: relative;
        width: 400px;
        margin-bottom: 12px;
        border-radius: 12px;
        padding: 12px;
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.504);
        overflow: hidden;
    }

    .testimonal_card_overlay {
        background-color: green;
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        right: 0;
        left: 0;
        z-index: -1;
    }

    .testimonial_card_h2 {
        color: purple;
        z-index: 1;
    }
    .testimonial_card_h3 {
        color: purple;
        z-index: 1;
    }
    .testimonial_card_quote {
        color: purple;
        z-index: 1;
    }
    .testimonial_card_date {
        color: purple;
        z-index: 1;
    }
`