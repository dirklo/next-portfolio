import { GrReactjs } from 'react-icons/gr'
import { SiRedux, SiRails, SiJavascript, SiNextDotJs, SiFramer, SiHtml5, SiCss3, SiPostgresql, SiNodeDotJs, SiMongodb } from 'react-icons/si'
import { DiRuby } from 'react-icons/di'

export function pickIcon(name, size = 30, color = 'black') {
    switch (name) {
        case 'GrReactjs':
            return <GrReactjs size={`${size}`} color={color} />
        case 'SiRedux':
            return <SiRedux size={`${size}`} color={color} />
        case 'SiRails':
            return <SiRails size={`${size}`} color={color} />
        case 'SiJavascript':
            return <SiJavascript size={`${size}`} color={color} />
        case 'SiNextDotJs':
            return <SiNextDotJs size={`${size}`} color={color} />
        case 'SiFramer':
            return <SiFramer size={`${size}`} color={color} />
        case 'SiHtml5':
            return <SiHtml5 size={`${size}`} color={color} />
        case 'SiCss3':
            return <SiCss3 size={`${size}`} color={color} />
        case 'SiPostgresql':
            return <SiPostgresql size={`${size}`} color={color} />
        case 'SiNodeDotJs':
            return <SiNodeDotJs size={`${size}`} color={color} />
        case 'SiMongodb':
            return <SiMongodb size={`${size}`} color={color} />
        case 'DiRuby':
            return <DiRuby size={`${size}`} color={color} />
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

]