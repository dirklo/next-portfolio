import css from 'styled-jsx/css'

export default css.resolve`
    .contact {
        width: 100%;
        max-width: 1320px;
        margin-top: 100px;
        background-color: teal;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

    }
    .form_container {
        width: 500px;
    }
    .input {
        width: 100%;
        background: transparent;
        border: none;
        border-bottom: 3px solid white;
    }
    .message_input {
        width: 100%;
        background: transparent;
        border: 3px solid white;
    }
`