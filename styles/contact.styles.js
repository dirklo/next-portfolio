import css from 'styled-jsx/css'

export default css.resolve`
    .contact {
        width: 100%;
        max-width: 1320px;
        margin-top: 100px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

    }
    h2 {
        color: white;
    }
    .form_container {
        width: 500px;
    }
    .input_container {
        position: relative;
    }
    .input {
        width: 100%;
        background: transparent;
        font-size: 2em;
        border: none;
        border-bottom: 3px solid white;
        color: white;
    }
    .input:focus {
        outline: none;
    }
    .label {
        position: absolute;
        top: 1.2em;
        left: .5em;
        color: white;
        font-size: 1.5em;
        pointer-events: none;
        transition: all 0.3s ease-in-out;
    }
    .selected {
        position: absolute;
        top: 0em;
        left: 0em;
        font-size: 1em;
        color: lightblue;
    }
    .message_label {
        position: relative;
        left: .5em;
        color: white;
        font-size: 1.5em;
    }
    .message_input {
        width: 100%;
        background: transparent;
        padding: 1em;
        border: 3px solid white;
        color: white;
        resize: none;
    }
    .message_input:focus {
        outline: none;
    }
`