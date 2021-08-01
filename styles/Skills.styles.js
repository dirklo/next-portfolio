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

    .skill_card {
        position: relative;
        width: 200px;
        background: gold;
        text-align: right;
        padding: 0px 32px;
        border-radius: 12px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .skill_card_h2 {
        font-size: 18px;
    }
`