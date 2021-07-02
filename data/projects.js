import taskaholik from '../img/taskaholik.png'
import taskaholikBg from '../img/taskaholikBg.png'
import pantam from '../img/pantam.png'
import pantamBg from '../img/pantamBg.jpg'
import chartsource from '../img/chartsource.png'
import chartsourceBg from '../img/chartsourceBg.jpg'
import quizit from '../img/quizit.png'
import quizitBg from '../img/quizitBg.jpg'
import cryptosearch from '../img/cryptosearch.png'
import cryptosearchBg from '../img/cryptosearchBg.png'
import javascript from '../img/javascript.svg'
import rails from '../img/rails.png'
import ruby from '../img/ruby.svg'
import sinatra from '../img/sinatra.png'
import react from '../img/react.png'

const projects = [
    {
        title: 'Taskaholik',
        titleImg: {
            url: taskaholik,
            height: '80px'
        },
        bgImg: {
            url: taskaholikBg
        },
        techs: [
            {name: 'react', img: react, height: '75px'},
            {name: 'javascript', img: javascript, height: '85px'},
            {name: 'rails', img: rails, height: '75px'}
        ],
        links: [
            {type: 'Code', url: 'https://github.com/dirklo/taskaholik-front-end'},
            {type: 'Demo', url: 'https://youtu.be/FmPsPjfME3E'},
            {type: 'Live App', url: 'https://dirklo.github.io/taskaholik-front-end/'}
        ],
        description: "Bug-tracker that allows a team to delegate and track work on multiple projects.",
        bullets: [
            "React - including hooks and routing.", 
            "Redux and Thunk - asynchronously updates and persists information for users in real-time.",
            "Devise gem - User login using JSON Web Tokens."
        ]
    },

    {
        title: 'Pantam',
        titleImg: {
            url: pantam,
            height: '80px'
        },
        bgImg: {
            url: pantamBg
        },
        techs: [
            {name: 'javascript', img: javascript, height: '85px'},
            {name: 'rails', img: rails, height: '75px'}
        ],
        links: [
            {type: 'Code', url: 'https://github.com/dirklo/hang-pan-frontend'},
            {type: 'Demo', url: 'https://youtu.be/36xpt6U-q0g'},
            {type: 'Live App', url: 'https://dirklo.github.io/hang-pan-frontend/'}
        ],
        description: "Virtual Instrument that users can perform in-browser.",
        bullets: [
            "Built with vanilla JavaScript and Ruby on Rails.", 
            "Web Audio API - In-browser audio sampling and effects processing.",
            "Asynchronous JavaScript - Database communication implemented with fetch and headless Rails API."
        ]

    },

    {
        title: 'Chart Source',
        titleImg: {
            url: chartsource,
            height: '40px'
        },
        bgImg: {
            url: chartsourceBg
        },
        techs: [
            {name: 'ruby', img: ruby, height: '75px'},
            {name: 'rails', img: rails, height: '75px'}
        ],
        links: [
            {type: 'Code', url: 'https://github.com/dirklo/chart-source'},
            {type: 'Demo', url: 'https://youtu.be/WjS2R5mJihA'},
            {type: 'Live App', url: 'https://chart-source.herokuapp.com/'}
        ],
        description: "Platform for Band-leaders to upload their PDF chart library, create and share setlists with a team.",
        bullets: [
            "Built with Ruby on Rails and a PostgreSQL database.", 
            "Omniauth - Multi-platform login.",
            "Cocoon - dynamic forms.",
            "SortableJS and Stimulus - drag and drop effects."
        ]
    },

    {
        title: 'Quiz It',
        titleImg: {
            url: quizit,
            height: '80px'
        },
        bgImg: {
            url: quizitBg
        },
        techs: [
            {name: 'ruby', img: ruby, height: '75px'},
            {name: 'sinatra', img: sinatra, height: '75px'}
        ],
        links: [
            {type: 'Code', url: 'https://github.com/dirklo/quiz-it'},
            {type: 'Demo', url: 'https://youtu.be/_Yxp_dMFs2I'},
            {type: 'Live App', url: 'https://quiz-it-three.herokuapp.com/'}
        ],
        description: "Tool for educators to create their own multiple-choice quizzes and share with their students.",
        bullets: [
            "Built with Ruby, Sinatra, and vanilla JavaScript.", 
            "Bcrypt - Secure user sign-in.", 
            "Active-Record - Maintains a PostgreSQL database."
        ]
    },

    {
        title: 'Crypto-Search',
        titleImg: {
            url: cryptosearch,
            height: '75px'
        },
        bgImg: {
            url: cryptosearchBg
        },
        techs: [
            {name: 'ruby', img: ruby, height: '75px'}
        ],
        links: [
            {type: 'Code', url: 'https://github.com/dirklo/crypto_search_cli'},
            {type: 'Demo', url: 'https://youtu.be/aHI5HzrzyAk'}
        ],
        description: "Command line application to search for current and historical market information on popular cryptocurrencies.",
        bullets: [
            "Built with Ruby.", 
            "Nokogiri - Web-scraping and data population.", 
            "Money and Date gems - Number, money, and date string formatting."
        ]
    }
]

export default projects
