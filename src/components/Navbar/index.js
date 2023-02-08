import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome, faUser, faSuitcase, faBars, faClose} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

const Navbar = () => {
    return (
        <section className='nav-section'>
            <nav>
                <NavLink exact='true' activeclassname="active" to="/">
                    Home<FontAwesomeIcon icon={faHome} color="#BF452A" />
                </NavLink>
                <NavLink exact='true' activeclassname="active" to="/about" className="about-link">
                    A propos<FontAwesomeIcon icon={faUser} color="#BF452A" />
                </NavLink>
                <NavLink exact='true' activeclassname="active" to="/portfolio" className="portfolio-link">
                    Portfolio<FontAwesomeIcon icon={faSuitcase} color="#BF452A" />
                </NavLink>
                <NavLink exact='true' activeclassname="active" to="/contact" className="contact-link">
                    Contact<FontAwesomeIcon icon={faHome} color="#BF452A" />
                </NavLink>
            </nav>
        </section>
    );
};

export default Navbar;