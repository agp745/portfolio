

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

export default Icon