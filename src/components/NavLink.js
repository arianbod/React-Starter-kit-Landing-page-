import React from 'react'

const NavLink = ({ path, text, itemClass }) => {
    return (
        <li>
            <a href={path} className={itemClass}>{text}</a>
        </li >
    )
}

export default NavLink