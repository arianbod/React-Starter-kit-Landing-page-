import React from 'react'

const Title = (props) => {
    const { titlePart1, titlePart2 } = props;
    return (
        <div className="section-title">
            <h2>{titlePart1} <span>{titlePart2}</span></h2>
        </div>

    )
}

export default Title