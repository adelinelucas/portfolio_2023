import React from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import './style.css';
const Navbar = () => {
    const navigate = useNavigate();

    const redirectToAnchor = (anchor) => {
        navigate(`#${anchor}`);
    };

    return (
        <nav className='page__salesforce-profil__header__navbar'>
            <ul>
                <li>
                    <a href="#page__salesforce-profil-about" className='salesforce-contact-link'>
                        <span className='displayed-content'>A propos</span>
                        <span className='hidden-content'>A propos</span>
                    </a>
                </li>
                <li>
                    <a href="#page__salesforce-portfolio" className='salesforce-contact-link'>
                        <span className='displayed-content'>Projets webs</span>
                        <span className='hidden-content'>Projets webs</span>
                    </a>
                </li>
                <li>
                    <a href="#page__salesforce-profil-exppro" className='salesforce-contact-link'>
                        <span className='displayed-content'>Experiences pro</span>
                        <span className='hidden-content'>Experiences pro</span>
                    </a>

                </li>
                <li>
                    <a href="#page__salesforce-profil-contact" className='salesforce-contact-link'>
                        <span className='displayed-content'>Contact</span>
                        <span className='hidden-content'>Contact</span>
                    </a>
                </li>
            </ul> 
        </nav>
    );
};

export default Navbar;