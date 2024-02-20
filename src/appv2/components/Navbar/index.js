import React from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {useLanguageContext} from '../../../global/contextes/LanguageContexte';

import './style.css';
const Navbar = () => {
    const {languageEng} = useLanguageContext();

    const navigate = useNavigate();

    const redirectToAnchor = (anchor) => {
        navigate(`#${anchor}`);
    };

    return (
        <nav className='page__salesforce-profil__header__navbar'>
            <ul>
                <li>
                    {   languageEng ? 
                        <a href="#page__salesforce-profil-about" className='salesforce-contact-link'>
                            <span className='displayed-content'>About</span>
                            <span className='hidden-content'>About</span>
                        </a>:
                        <a href="#page__salesforce-profil-about" className='salesforce-contact-link'>
                            <span className='displayed-content'>A propos</span>
                            <span className='hidden-content'>A propos</span>
                        </a>
                    }
                </li>
                <li>
                    {   languageEng ?
                        <a href="#page__salesforce-portfolio" className='salesforce-contact-link'>
                            <span className='displayed-content'>Webs projects</span>
                            <span className='hidden-content'>Webs projects</span>
                        </a>
                        :
                        <a href="#page__salesforce-portfolio" className='salesforce-contact-link'>
                            <span className='displayed-content'>Projets webs</span>
                            <span className='hidden-content'>Projets webs</span>
                        </a>
                    }
                </li>
                <li>
                    {   languageEng ?
                        <a href="#page__salesforce-profil-exppro" className='salesforce-contact-link'>
                            <span className='displayed-content'>Professional Experiences</span>
                            <span className='hidden-content'>Professional Experiences</span>
                        </a>
                        :
                        <a href="#page__salesforce-profil-exppro" className='salesforce-contact-link'>
                            <span className='displayed-content'>Experiences pro</span>
                            <span className='hidden-content'>Experiences pro</span>
                        </a>
                    }
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