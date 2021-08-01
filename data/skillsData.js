import { GrReactjs } from 'react-icons/gr'
import { SiRedux, SiRails, SiJavascript, SiNextDotJs, SiFramer, SiHtml5, SiCss3, SiPostgresql, SiNodeDotJs, SiMongodb, SiBootstrap, SiPython } from 'react-icons/si'
import { DiRuby } from 'react-icons/di'

export function pickIcon(name) {
    switch (name) {
        case 'GrReactjs':
            return <GrReactjs size='30' />
        case 'SiRedux':
            return <SiRedux size='30' />
        case 'SiRails':
            return <SiRails size='45' />
        case 'SiJavascript':
            return <SiJavascript size='30' />
        case 'SiNextDotJs':
            return <SiNextDotJs size='30' />
        case 'SiFramer':
            return <SiFramer size='30' />
        case 'SiHtml5':
            return <SiHtml5 size='30' />
        case 'SiCss3':
            return <SiCss3 size='30' />
        case 'SiPostgresql':
            return <SiPostgresql size='30' />
        case 'SiNodeDotJs':
            return <SiNodeDotJs size='30' />
        case 'SiMongodb':
            return <SiMongodb size='30' />
        case 'SiBootstrap':
            return <SiBootstrap size='30' />
        case 'SiPython':
            return <SiPython size='30' />
        case 'DiRuby':
            return <DiRuby size='30' />
    }
}

export const skills = [
    {
        "name":"React",
        "icon":"GrReactjs"
    },
    {
        "name":"Redux",
        "icon":"SiRedux"
    },
    {
        "name":"Ruby",
        "icon":"DiRuby"
    },
    {
        "name":"Rails",
        "icon":"SiRails"
    },
    {
        "name":"JavaScript",
        "icon":"SiJavascript"
    },
    {
        "name":"NextJs",
        "icon":"SiNextDotJs"
    },
    {
        "name":"Framer",
        "icon":"SiFramer"
    },
    {
        "name":"Bootstrap",
        "icon":"SiBootstrap"
    },
    {
        "name":"HTML5",
        "icon":"SiHtml5"
    },
    {
        "name":"CSS3",
        "icon":"SiCss3"
    },
    {
        "name":"PostgreSQL",
        "icon":"SiPostgresql"
    },
    {
        "name":"NodeJs",
        "icon":"SiNodeDotJs"
    },
    {
        "name":"Mongo DB",
        "icon":"SiMongodb"
    },
    {
        "name":"Python",
        "icon":"SiPython"
    },

]