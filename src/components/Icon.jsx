

function Icon({ tech, hoveredIcon, setHoveredIcon }) {
    return(

        <div className="icon">
            <img
                src={`./src/assets/SVGs/${tech}-icon.svg`}
                className='icon'
                onMouseEnter={() => setHoveredIcon(tech)}
                onMouseLeave={() => setHoveredIcon(null)}
                />
            {hoveredIcon && (
                <div>
                    <span>{tech}</span>
                </div>
            )}
        </div>
    )
}

export default Icon