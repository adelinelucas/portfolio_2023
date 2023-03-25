import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome, faUser, faSuitcase, faBars, faLocationDot, faGraduationCap} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

const Navbar = () => {
    return (
        <section className='header__nav-section'>
            <nav>
                <NavLink exact='true' activeclassname="active" to="/">
                    Home<FontAwesomeIcon icon={faHome} color="#D95B96" />
                </NavLink>
                <NavLink exact='true' activeclassname="active" to="/about" className="about-link">
                    A propos<FontAwesomeIcon icon={faUser} color="#D95B96" />
                </NavLink>
                <NavLink exact='true' activeclassname="active" to="/portfolio" className="portfolio-link">
                    Portfolio<FontAwesomeIcon icon={faSuitcase} color="#D95B96" />
                </NavLink>
                <NavLink exact='true' activeclassname="active" to="/experiences-pro" className="portfolio-link">
                    Experiences pro<FontAwesomeIcon icon={faGraduationCap} color="#D95B96" />
                </NavLink>
                <NavLink exact='true' activeclassname="active" to="/contact" className="contact-link">
                    Localisation<FontAwesomeIcon icon={faLocationDot} color="#D95B96" />
                </NavLink>
            </nav>
        </section>
    );
};

export default Navbar;