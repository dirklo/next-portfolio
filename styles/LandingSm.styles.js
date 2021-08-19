import css from 'styled-jsx/css'

export default css.resolve`
    .landing {
        margin: 0;
        padding: 0;
        position: relative;
        width: 100%;
        color: white;
        height: 100vh;
        overflow: visible;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    .portrait_div {
        position: relative;
        bottom: 0;
        opacity: 1;
        z-index: 1;
    }
    .portrait {
        position: relative;
        z-index: 1;
        pointer-events: none;
    }
    .name_div {
        position: relative;
        width: 100%;
        height: 180px;
        z-index: 1;
    }
    .name_h1_1 {
        position: relative;
        top: .1em;
        left: .3em;
        font-family: 'Suez One', serif;
        width: 100%;
        margin: 0;
        padding: 0;
        font-size: 6em;
        text-shadow: 0px 2px 10px black;
        color: gold;
    }
    .name_h1_2 {
        position: relative;
        top: -.6em;
        left: .6em;
        width: 100%;
        margin: 0;
        padding: 0;
        font-family: 'Public Sans', sans-serif;
        font-size: 96px;
        text-shadow: 0px 2px 10px black;
        color: gold;
    }
    .h2_container {
        position: relative;
    }
    h2 {
        position: relative;
        width: 100%;
        letter-spacing: .1em;
        text-align: center;
        z-index: 1
    }
    .rect {
        position: absolute;
        height: 146px;
        width: 146px;
        border-radius: 20px;
        background-color: gold;
        box-shadow: inset -3px -3px 3px rgba(0, 0, 0, 0.319), inset 3px 3px 3px rgba(0, 0, 0, 0.319);
        animation: spin 20s infinite linear;
        z-index: 0;
    }
    @keyframes spin {
        from { 
            transform: rotateZ(0deg) rotate(-45deg); 
        }
        to {
            transform: rotateZ(360deg) rotate(-45deg); 
        }
    }
`