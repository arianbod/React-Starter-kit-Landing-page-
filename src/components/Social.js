import React from 'react'

const Social = ({ path, iconClass, parentClassName }) => {
    return (
        <div>
            <li>
                <a href={path} target="_blank" className={parentClassName} rel="noreferrer"
                ><i className={iconClass}></i
                ></a>
            </li>
        </div>
    )
}

export default Social