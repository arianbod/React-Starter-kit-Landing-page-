import React from 'react';
import logo from '../assets/images/logo.svg';
import data from '../data/en.json';
import Social from './Social';
import NavLink from './NavLink';
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
                                    <NavLink key={link.id} {...link} itemClass="nav-link" />
                                )
                            })
                        }


                    </ul>

                    <ul className="nav-icons">
                        {iconData.map((social, index) =>
                        (

                            <Social key={social.id} {...social} parentClassName="nav-icon" />

                        ))}

                    </ul>
                </div>
            </nav >

        </>
    )
}
export default Navbar