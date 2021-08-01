import css from 'styled-jsx/css'

export default css.resolve`
    .container {
        background: transparent;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .traditional_container {
        width: 50%;
    }
    .self_study_container {
        width: 50%;
    }
    
    .education_card {
        background: grey;
    }
`