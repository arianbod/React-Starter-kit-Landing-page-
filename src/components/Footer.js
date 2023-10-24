import React from 'react'
import data from '../data/en.json'
const Footer = () => {
    const { navLinks, iconData } = data
    return (
        <footer className="section footer">
            <ul className="footer-links">
                {navLinks.map((link, index) => {
                    const { text, path, id } = link
                    return (
                        <li key={id}>
                            <a href={path} className="footer-link">{text}</a>
                        </li>

                    )
                })}
            </ul>
            <ul className="footer-icons">
                {iconData.map((social, index) => (
                    <li key={social.id}>
                        <a href={social.path} target="_blank" className="footer-icon" rel="noreferrer"
                        ><i className={social.iconClass}></i
                        ></a>
                    </li>


                ))}

            </ul>
            <p className="copyright">
                copyright &copy; Backroads travel tours company
                <span id="date">{new Date().getFullYear()}</span> all rights reserved
            </p>
        </footer>
    )
}

export default Footer