import React from 'react';
import logo from '../assets/images/logo.svg';
import data from '../data/en.json';
const Navbar = () => {
    const { navLinks, iconData } = data;


    return (
        <>
            <nav className="navbar" >
                <div className="nav-center">
                    <div className="nav-header">
                        <img src={logo} className="nav-logo" alt="backroads" />
                        <button type="button" className="nav-toggle" id="nav-toggle">
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                    <ul className="nav-links" id="nav-links">
                        {
                            navLinks.map((link, index) => {
                                return (
                                    <li key={link.id}>
                                        <a href={link.path} className="nav-link"> {link.text} </a>
                                    </li>

                                )
                            })
                        }


                    </ul>

                    <ul className="nav-icons">
                        {iconData.map((social, index) =>
                        (
                            <li key={social.id}>
                                <a href={social.href} target="_blank" className="nav-icon" rel="noreferrer"
                                ><i className={social.iconClass}></i></a>
                            </li>

                        ))}

                    </ul>
                </div>
            </nav >

        </>
    )
}
export default Navbar