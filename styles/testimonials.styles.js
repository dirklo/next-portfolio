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

    .testimonial_card::before {
        content: "''";
        font-size: 200px;
        position: absolute;
        inset: 0;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        z-index: 0;
    }

    .testimonial_card_h2 {
        position: relative;
        color: purple;
        z-index: 1;
    }
    .testimonial_card_h3 {
        position: relative;
        color: purple;
        z-index: 1;
    }
    .testimonial_card_quote {
        position: relative;
        color: purple;
        z-index: 1;
    }
    .testimonial_card_date {
        position: relative;
        color: purple;
        z-index: 1;
    }
`