import css from 'styled-jsx/css'

export default css.resolve`
    .resume {
        width: 100%;
        max-width: 1320px;
        margin-top: 100px;
        height: 100vh;
        max-height: calc(100vh - 100px);
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
    }

    .left_pane {
        background: linear-gradient(to bottom, rgb(40, 0, 88), rgb(0, 0, 66));
        width: 30%;
        height: 100%;
    }

    .right_pane {
        width: 70%;
        height: 100%;
    }
    
    .profile_div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    
    .profile_image {
        position: relative;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        overflow: hidden;
    }
    
    .profile_name_div {
        position: relative;
        width: 250px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }

    .profile_name {
        margin-bottom: 0;
        font-size: 36px;
        color: white;
        text-align: center;
    }
    
    .profile_subtitle {
        margin-top: 0;
        font-size: 24px;
        color: rgb(117, 117, 117);
        text-align: center;
    }

    .description {
        color: rgb(101, 101, 101);
        padding: 10px;
    } 
`