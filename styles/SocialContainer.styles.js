import css from 'styled-jsx/css'

export default css.resolve`
    .social_container {
        position: relative;
        width: 220px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        z-index: 1;
    }

    a {
        background: red;
        height: 64;
        width: 64;
        transition: all 0.3s ease-in-out
    }

    a:hover {
        transform: scale(1.2);
    }
`