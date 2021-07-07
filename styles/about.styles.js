import css from 'styled-jsx/css'

export default css.resolve`
    .about {
        position: relative;
        margin-top: 100px;
        width: 100%;
        max-width: 1320px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }

    .avatar_container {
        position: relative;
        width: 200px;
        height: 150px;
    }

    .about_h1 {
        position: absolute;
        bottom: 0;
        right: 0;
        left: 0;
        margin: 0;
        text-align: center;
        color: white;
        font-size: 42px;
        text-shadow: 0px 0px 5px black;
    }


    .story_list {
        width: 100%
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }

    .story_card_right {
        width: 1000px;
        color: white;
        margin-bottom: 50px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .story_card_left {
        width: 1000px;
        color: white;
        margin-bottom: 50px;
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: center;
    }
    .story_card_content {
        width: 700px;
        font-size: 20px;
        text-align: center;
    }
    
    .story_card_image_container {
        position: relative;
        width: 200px;
        height: 150px;
    }
`