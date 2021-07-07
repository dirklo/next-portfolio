const projects = {
    taskaholik: {
        title: 'Taskaholik',
        description: 'Bug-tracker and team management application built with React and Ruby on Rails',
        subDescription: 'Put together a team, create a project, outline your goals and deadlines, and assign team members.',
        details: [
            {
                title: 'Redux',
                description: 'Manages data across the application.'
            },
            {
                title: "Devise/JWT's",
                description: 'Full user authentication by use of JSON Web Tokens.'
            },
            {
                title: 'React-query',
                description: 'Data fetching and memoization.'
            }
        ],
        codeUrl: 'https://github.com/dirklo/taskaholik-front-end',
        liveUrl: 'https://dirklo.github.io/taskaholik-front-end/',
        techs: [
            {
                svgUrl: '/reactSvgLogo.svg',
                altText: 'React Logo'
            },
            {
                svgUrl: '/reduxSvgLogo.svg',
                altText: 'Redux Logo'
            },
            {
                svgUrl: '/javascriptSvgLogo.svg',
                altText: 'Javascript Logo'
            },
            {
                svgUrl: '/railsSvgLogo.svg',
                altText: 'Rails Logo'
            }
        ],
        mockup: {
            url: '/taskaholikMockups.png',
            height: '464',
            width: '500'
        }
    },
    pantam: {
        title: 'Pantam',
        description: 'Playable, in-browser virtual instrument.  Built with JavaScript, Web Audio API, and Ruby on Rails.',
        subDescription: 'Create and save your own unique scales, and play your custom Hand Pan with your keyboard!',
        details: [
            {
                title: 'Unique Interface',
                description: '3-tier keyboard mapping for dynamic, expressive performance.'
            },
            {
                title: 'Asynchronous JavaScript',
                description: 'Database implemented with a headless Ruby on Rails API and Fetch.'
            },
            {
                title: 'Audio Effects',
                description: 'Designed and managed with Web Audio API.'
            }
        ],
        codeUrl: 'https://github.com/dirklo/hang-pan-frontend',
        liveUrl: 'https://dirklo.github.io/hang-pan-frontend/',
        techs: [
            {
                svgUrl: '/javascriptSvgLogo.svg',
                altText: 'Javascript Logo'
            },
            {
                svgUrl: '/railsSvgLogo.svg',
                altText: 'Rails Logo'
            }
        ],
        mockup: {
            url: '/pantamMockups.png',
            height: '464',
            width: '500'
        }
    },
    chartsource: {
        title: 'Chart-Source',
        description: 'Library tool for bandleaders to quickly share PDF charts with their team.',
        subDescription: 'Upload your entire sheet music library, organize and create setlists, and share with your team at the click of a button!',
        details: [
            {
                title: 'Ruby on Rails',
                description: 'Manages data across the application with Active-Record and PostgreSql.'
            },
            {
                title: 'Drag and Drop',
                description: 'Full user authentication by use of JSON Web Tokens.  '
            },
            {
                title: 'Dynamic Nested Forms',
                description: 'Data fetching and memization.'
            },
            {
                title: 'Omniauth',
                description: 'Implemented user login using facebook or Github account.'
            }
        ],
        codeUrl: 'https://github.com/dirklo/chart-source',
        liveUrl: 'https://chart-source.herokuapp.com/',
        techs: [
            {
                svgUrl: '/rubySvgLogo.svg',
                altText: 'Ruby Logo'
            },
            {
                svgUrl: '/railsSvgLogo.svg',
                altText: 'Rails Logo'
            },
            {
                svgUrl: '/javascriptSvgLogo.svg',
                altText: 'Javascript Logo'
            }
        ],
        mockup: {
            url: '/chartsourceMockups.png',
            height: '464',
            width: '500'
        }
    },
    quizit: {
        title: 'Quiz-it',
        description: 'Quiz builder for educators to create custom quizzes and track their students scores.',
        subDescription: 'Create two different styles of multiple choice questions, complete with auto-grading and comments.  Add accounts to your group and share your quizzes at the click of a button.',
        details: [
            {
                title: 'Sinatra',
                description: 'Built with Ruby, Sinatra, and vanilla Javascript.'
            },
            {
                title: 'Bcrypt',
                description: 'Secure user login with the Bcrypt gem.'
            },
            {
                title: 'Dynamic Nested Forms',
                description: 'Dynamic nested forms built by hand in JavaScript.'
            }
        ],
        codeUrl: 'https://github.com/dirklo/quiz-it-three',
        liveUrl: 'https://quiz-it-three.herokuapp.com',
        techs: [
            {
                svgUrl: '/rubySvgLogo.svg',
                altText: 'Ruby Logo'
            },
            {
                svgUrl: '/sinatraSvgLogo.svg',
                altText: 'Sinatra Logo'
            },
            {
                svgUrl: '/javascriptSvgLogo.svg',
                altText: 'Javascript Logo'
            }
        ],
        mockup: {
            url: '/quizitMockups.png',
            height: '464',
            width: '500'
        }
    },
    cryptosearch: {
        title: 'Crypto-Search',
        description: 'Command line tool to search for currrent and historical market data of the top crypto-currencies.',
        subDescription: 'Search for a list of the top twenty most popular crypto-currencies, and use the menus to view current market data, developer data, historical data and world market data.',
        details: [
            {
                title: 'Ruby',
                description: 'Built as a gem with Ruby.'
            },
            {
                title: 'Nokogiri',
                description: 'Implemented web-scraping and api data fetching.'
            },
            {
                title: 'Money and Date gems',
                description: 'Fully formatted date and money displays,  with full foreign currency support.'
            }
        ],
        codeUrl: 'https://github.com/dirklo/crypto_search_cli',
        techs: [
            {
                svgUrl: '/rubySvgLogo.svg',
                altText: 'Ruby Logo'
            }
        ],
        mockup: {
            url: '/cryptosearchMockups.png',
            height: '325',
            width: '565'
        }
    }
}

export default projects
