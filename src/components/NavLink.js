import React from 'react'

const navLink = ({ path, text, itemClass }) => {
    return (
        <li>
            <a href={path} className={itemClass}>{text}</a>
        </li >
    )
}

export default navLink