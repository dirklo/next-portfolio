import css from 'styled-jsx/css'

export default css.resolve`
    .resume_button {
        position: relative;
        border: 3px solid white;
        padding: 4px;
        margin: 0 12px;
        margin-bottom: 4px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
    }

    .resume_button_span {
        color: white;
    }

    .selected {
        border: 3px solid gold;
    }

    .selected_text {
        color: gold;
    }
`