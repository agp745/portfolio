import { useState } from "react"
import Icon from "./Icon"

function Skills() {

    const html5 = './src/assets/SVGs/html5-icon.svg'
    const css3 = './src/assets/SVGs/css3-icon.svg'
    const bootstrap = './src/assets/SVGs/bootstrap-icon.svg'
    const tailwindcss = './src/assets/SVGs/tailwindcss-icon.svg'
    const javascript = './src/assets/SVGs/javascript-icon.svg'
    const typescript = './src/assets/SVGs/typescript-icon.svg'
    const reactjs = './src/assets/SVGs/reactjs-icon.svg'
    const redux = './src/assets/SVGs/redux-icon.svg'
    const nodejs = './src/assets/SVGs/nodejs-icon.svg'
    const expressjs = './src/assets/SVGs/expressjs-icon.svg'
    const postgresql = './src/assets/SVGs/postgresql-icon.svg'
    const sequelizejs = './src/assets/SVGs/sequelizejs-icon.svg'
    const mongodb = './src/assets/SVGs/mongodb-icon.svg'
    const bash = './src/assets/SVGs/bash-icon.svg'
    const linux = './src/assets/SVGs/linux-icon.svg'
    const auth0 = './src/assets/SVGs/auth0-icon.svg'
    const git = './src/assets/SVGs/git-icon.svg'

    const [hoveredIcon, setHoveredIcon] = useState(null)

    const propsObj = {
        tech:"html5",
        hoveredIcon: hoveredIcon,
        setHoveredIcon: setHoveredIcon,
    }

    return(
        <section className="skills">
            {/* <img
            src={html5}
            className='icon'
            onMouseEnter={() => setHoveredIcon('html5')}
            onMouseLeave={() => setHoveredIcon(null)}
            /> */}

            {/* <Icon tech={hoveredIcon} /> */}
            <Icon {...propsObj} />
            <img src={css3} className='icon' />
            <img src={bootstrap} className='icon' />
            <img src={tailwindcss} className='icon' />
            <img src={javascript} className='icon' />
            <img src={typescript} className='icon' />
            <img src={reactjs} className='icon' />
            <img src={redux} className='icon' />
            <img src={nodejs} className='icon' />
            <img src={expressjs} className='icon' />
            <img src={postgresql} className='icon' />
            <img src={sequelizejs} className='icon' />
            <img src={mongodb} className='icon' />
            <img src={bash} className='icon' />
            <img src={linux} className='icon' />
            <img src={auth0} className='icon' />
            <img src={git} className='icon' />
        </section>
    )
}

export default Skills

