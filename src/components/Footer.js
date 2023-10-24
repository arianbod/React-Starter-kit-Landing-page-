import React from 'react'
import data from '../data/en.json'
import Social from './Social'
import NavLink from './NavLink'
const Footer = () => {
    const { navLinks, iconData } = data
    return (
        <footer className="section footer">
            <ul className="footer-links">
                {navLinks.map((link, index) => {
                    return (
                        <NavLink key={link.id} {...link} itemClass="footer-link" />

                    )
                })}
            </ul>
            <ul className="footer-icons">
                {iconData.map((social, index) => (
                    <Social key={social.id} {...social} parentClassName="footer-icon" />

                ))}

            </ul>
            <p className="copyright">
                copyright & copy; Backroads travel tours company
                <span id="date">{new Date().getFullYear()}</span> all rights reserved
            </p>
        </footer>
    )
}

export default Footer