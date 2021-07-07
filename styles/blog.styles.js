import css from 'styled-jsx/css'

export default css.resolve`
    .blog {
        position: relative;
        width: 100%;
        max-width: 1320px;
        margin-top: 100px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .feature {
        position: relative;
        width: 85%;
        height: 400px;
        background-color: grey;
        border: 10px solid gold;
        box-shadow: 0px 0px 20px gold;
    }

    .feature_blurb {
        position: absolute;
        font-weight: lighter;
        letter-spacing: 2px;
        bottom: 50px;
        right: 10px;
        width: 33%;
        color: white;
    }

    .feature_button {
        position: absolute;
        right: -3px;
        bottom: -3px;
        border-radius: 5px;
        color: gold;
        border: 3px solid gold;
        padding: 10px 20px;
        background: transparent;
        cursor: pointer;
    }

    .feature_title {
        position: absolute;
        left: 0px;
        top: 55px;
        width: 394px;
        height: 114px;
        padding: 10px;
        color: white;
        background-color: rgba(147, 127, 14, 0.798);
    }

    .feature_title_h2 {
        margin-top: 0;
        font-size: 20px;
    }

    .remaining_posts_container {
        position: relative;
        width: 100%;
        display: flex;
        overflow-x: auto;
        padding: 30px 100px;
        margin-top: 20px;
    }

    .remaining_posts_container_cover {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 410px;
        background: linear-gradient(to right, #0C1125 0%, transparent 10%, transparent 90%, #0C1125);
        z-index: 5;
        pointer-events: none;
    }

    .post_card {
        position: relative;
        min-width: 250px;
        height: 350px;
        margin-right: 30px;
        border-radius: 5px;
        background-color: lightgray;
        display: flex;
        flex-direction: column-reverse;
        justify-content: space-between;
        box-shadow: 0px 0px 10px gold;
        overflow: hidden;
        cursor: pointer;
    }

    .post_card_h2 {
        width: 100%;
        height: 33.33%;
        margin-right: auto;
        margin-left: auto;
        margin-bottom: 0;
        padding: 10px;
        font-size: 20px;
        text-align: center;
        background-color: gold;
        z-index: 1;
    }

    .post_card_h3 {
        z-index: 3;
        align-self: flex-end;
        margin-right: 10px;
        color: white;
    }

    .post_image_container {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 66.66%;
    }

    .post_image_container:after {
        content: '';
        position: absolute;
        background: linear-gradient(45deg, #00000000, #000000);
        z-index: 2;
        height: 100%;
        width: 100%;
    }
`