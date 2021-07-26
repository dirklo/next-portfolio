import css from 'styled-jsx/css'

export default css.resolve`
    .resume {
        width: 100%;
        max-width: 1320px;
        margin-top: 100px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
    }

    .left_pane {
        background: linear-gradient(to bottom, rgb(10, 1, 20), rgb(2, 2, 20));
        width: 30%;
        height: 100%;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.716);
    }

    .right_pane {
        width: 70%;
        height: 100%;
    }

    .intro_card {
        margin-bottom: 28px;
    }
    
    .profile_div {
        margin-bottom: 12px;
        height: 257px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    
    .profile_name_div {
        position: relative;
        width: 257px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .profile_name {
        margin-top: 28px;
        margin-bottom: 0;
        font-size: 36px;
        color: white;
        text-align: center;
    }
    
    .profile_subtitle {
        margin-top: 0;
        padding: 24px;
        font-size: 24px;
        color: rgb(117, 117, 117);
        text-align: center;
    }

    .resume_card {
        padding: 0 24px;
        margin-bottom: 4px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }

    .resume_card_span {
        color: rgb(166, 166, 166);
        font-size: 12px;
        text-align: right;
        line-height: 2em;
        padding-right: 24px;
    }

    .resume_buttons {
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }

    .resume_button {
        position: relative;
        width: 80%;
        border: 3px solid white;
        padding: 4px;
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
`