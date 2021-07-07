import css from 'styled-jsx/css'

export default css.resolve`
    .projects {
        position: relative;
        width: 100%;
        max-width: 1320px;
        margin-top: 80px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .project_select {
        width: 400px;
        height: 60px;
        padding: 10px 10px 0px;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: flex-start;
        background: #475074;
        border-radius: 100px;
    }

    .projects_h2 {
        text-align: center;
        margin-top: 0;
        margin-bottom: 0;
        color: white;
    }

    .project_select_icon {
        position: relative;
        height: 40px;
        width: 40px;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
    }

    .selected {
        filter: invert(.5) sepia(1) saturate(19.5) brightness(1000%) hue-rotate(1deg);   
    }

    .project_display {
        width: 100%;
    }

    /* PROJECTS */
    .project {
        color: white;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
    }

    .left_pane {
        width: 60%;
        padding-left: 100px;
        padding-right: 120px;
    }
    .right_pane {
        width: 40%;
        padding-right: 100px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .project_h1 {
        font-family: Spartan;
        font-style: normal;
        font-weight: bold;
        font-size: 56px;
        line-height: 81px;
        letter-spacing: 0.15em;
        margin-top: 50px;
        margin-bottom: 0;
    }

    .project_h2 {
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 28px;
        line-height: 46px;
        color: rgba(255, 255, 255, 0.4);
    }

    .project_p {
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 21px;
        color: rgba(255, 255, 255, 0.4);
    }

    .project_p_em {
        font-size: 24px;
        color: white;
    }

    .techlist {
        margin: 50px 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .techlist_item {
        margin: 0 10px;
    }

    .cta_buttons {
        margin-top: 50px;
    }

    .cta_buttons_button {
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.1em;
        border: none;
        text-decoration: none;
        color: #FFFFFF;
        padding: 9px 41px;
        border-radius: 50px;
        margin-right: 20px;
        cursor: pointer;
    }

    .button_1 {
        background: transparent;
        border: 5px solid #108090;
        box-shadow: 0px 0px 20px #108090, 
                    inset 0px 0px 20px #108090;
        text-shadow: 0px 0px 10px #ececec;
    }

    .button_2 {
        background: transparent;
        border: 5px solid #8B7FAD;
        box-shadow: 0px 0px 20px #8B7FAD, 
                    inset 0px 0px 20px #8B7FAD;
        text-shadow: 0px 0px 10px #ececec;
    }
`