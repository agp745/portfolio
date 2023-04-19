import { useState } from "react"
import '../css/Skills.css'

function Icon(props) {

    const {hoveredIcon, setHoveredIcon, tech} = props
    const isHovered = hoveredIcon === tech

    return(

        <div className="icon">
            <img
                src={`./src/assets/SVGs/${tech}-icon.svg`}
                className='icon'
                onMouseEnter={() => setHoveredIcon(tech)}
                onMouseLeave={() => setHoveredIcon(null)}
                />
            {isHovered && (
                <div className="icon-name">
                    <span>{tech}</span>
                </div>
            )}
        </div>
    )
}


export default function Skills() {

    const [hoveredIcon, setHoveredIcon] = useState(null)

    const stateObj = {
        hoveredIcon: hoveredIcon,
        setHoveredIcon: setHoveredIcon,
    }

    return(
        <section className="skills">

            <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" className="icon-link">
                <Icon {...stateObj} tech="html5" />
            </a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" className="icon-link">
                <Icon {...stateObj} tech="css3" />
            </a>
            <a href="https://tailwindcss.com/" target="_blank" className="icon-link">
                <Icon {...stateObj} tech="tailwindcss" />
            </a>
            <a href="https://getbootstrap.com/" target="_blank" className="icon-link">
                <Icon {...stateObj} tech="bootstrap" />
            </a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" className="icon-link">
                <Icon {...stateObj} tech="javascript" />
            </a>
            <a href="https://www.typescriptlang.org/" target="_blank" className="icon-link">
                <Icon {...stateObj} tech="typescript" />
            </a>
            <a href="https://react.dev/" target="_blank" className="icon-link">
                <Icon {...stateObj} tech="reactjs" />
            </a>
            <a href="https://redux.js.org/" target="_blank" className="icon-link">
                <Icon {...stateObj} tech="redux" />
            </a>
            <a href="https://nodejs.org/en/docs" target="_blank" className="icon-link">
                <Icon {...stateObj} tech="nodejs" />
            </a>
            <a href="http://expressjs.com/" target="_blank" className="icon-link">
                <Icon {...stateObj} tech="expressjs" />
            </a>
            <a href="https://www.postgresql.org/docs/" target="_blank" className="icon-link">
                <Icon {...stateObj} tech="postgresql" />
            </a>
            <a href="https://sequelize.org/docs/v6/" target="_blank" className="icon-link">
                <Icon {...stateObj} tech="sequelizejs" />
            </a>
            <a href="https://www.mongodb.com/" target="_blank" className="icon-link">
                <Icon {...stateObj} tech="mongodb" />
            </a>
            <a href="https://www.gnu.org/software/bash/manual/bash.html" target="_blank" className="icon-link">
                <Icon {...stateObj} tech="bash" />
            </a>
            <a href="https://wiki.archlinux.org/title/Kernel" target="_blank" className="icon-link">
                <Icon {...stateObj} tech="linux" />
            </a>
            <a href="https://auth0.com/docs" target="_blank" className="icon-link">
                <Icon {...stateObj} tech="auth0" />
            </a>
            <a href="https://git-scm.com/" target="_blank" className="icon-link">
                <Icon {...stateObj} tech="git" />
            </a>
        </section>
    )
}
