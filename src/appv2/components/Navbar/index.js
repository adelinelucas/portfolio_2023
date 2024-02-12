import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';
const Navbar = () => {
    return (
        <nav className='page__salesforce-profil__header__navbar'>
            <NavLink exact='true' activeclassname="active" to="/salesforce/about" className="salesforce-about-link">A propos</NavLink>
            <NavLink exact='true' activeclassname="active" to="/salesforce/portfolio" className="salesforce-portfolio-link">Mes projets</NavLink>
            <NavLink exact='true' activeclassname="active" to="/salesforce/experiences-pro" className="salesforce-experiences-link">Experiences pro</NavLink>
            <NavLink exact='true' activeclassname="active" to="/#page__salesforce-profil-contact" className="salesforce-contact-link">Contact</NavLink>
        </nav>
    );
};

export default Navbar;