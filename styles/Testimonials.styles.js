import css from 'styled-jsx/css'

export default css.resolve`
    .container {
        background: transparent;
        height: 100%;
        margin-top: 12px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .testimonial_card {
        position: relative;
        width: 300px;
        margin-bottom: 12px;
        border-radius: 12px;
        padding: 32px;
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.504);
        overflow: hidden;
        background-color: white;
    }

    .testimonial_card_icon {
        position: absolute;
        width: 100%;
        height: 100%;
        inset: 0;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 0;
    }

    .testimonial_card_h2 {
        position: relative;
        color: black;
        z-index: 1;
    }
    .testimonial_card_h3 {
        position: relative;
        color: black;
        z-index: 1;
    }
    .testimonial_card_quote {
        position: relative;
        color: black;
        z-index: 1;
    }
    .testimonial_card_date {
        position: relative;
        display: block;
        width: 100%;
        margin-top: 24px;
        color: rgb(139, 139, 139);
        z-index: 1;
        text-align: right;
    }
`