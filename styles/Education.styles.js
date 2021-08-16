import css from 'styled-jsx/css'

export default css.resolve`
    .container {
        background: transparent;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
    }

    .traditional_container {
        width: 50%;
        padding: 24px;
    }
    .self_study_container {
        width: 50%;
        padding: 24px;
    }

    .section_title {
        color: white;
        width: 100%;
        text-align: center;
    }

    .education_card {
        padding: 24px;
        background: rgb(190, 189, 233);
        margin-bottom: 12px;
        border-radius: 15px;
    }
`