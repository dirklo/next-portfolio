import css from 'styled-jsx/css'

export default css.resolve`
    .container {
        background: transparent;
        height: 100%;
        padding: 100px 200px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }

    .skill_card {
        position: relative;
        width: 180px;
        background: gold;
        text-align: right;
        margin: 0 12px 24px 12px;
        padding: 0px 12px;
        border-radius: 12px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .skill_card_h2 {
        font-size: 18px;
        color: white;
        text-shadow: 0 0 5px rgb(0, 0, 0);
    }
`