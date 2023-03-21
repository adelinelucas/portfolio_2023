import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome, faUser, faSuitcase, faBars, faLocationDot} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

const Navbar = () => {
    return (
        <section className='header__nav-section'>
            <nav>
                <NavLink exact='true' activeclassname="active" to="/">
                    Home<FontAwesomeIcon icon={faHome} color="#504EE8" />
                </NavLink>
                <NavLink exact='true' activeclassname="active" to="/about" className="about-link">
                    A propos<FontAwesomeIcon icon={faUser} color="#504EE8" />
                </NavLink>
                <NavLink exact='true' activeclassname="active" to="/portfolio" className="portfolio-link">
                    Portfolio<FontAwesomeIcon icon={faSuitcase} color="#504EE8" />
                </NavLink>
                <NavLink exact='true' activeclassname="active" to="/contact" className="contact-link">
                    Localisation<FontAwesomeIcon icon={faLocationDot} color="#504EE8" />
                </NavLink>
            </nav>
        </section>
    );
};

export default Navbar;