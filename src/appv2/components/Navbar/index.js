import React, { useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {useLanguageContext} from '../../../global/contextes/LanguageContexte';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

import './style.css';
const Navbar = () => {
    const {languageEng, setEmitScrollEvent,emitScrollEvent} = useLanguageContext();
    const [showMobileMenu, setShowMobileMenu]= useState(false)
    const navigate = useNavigate();

    const redirectToAnchor = (anchor) => {
        navigate(`#${anchor}`);
    };

    return (
        <nav className='page__salesforce-profil__header__navbar' >
            <ul className='page__salesforce-profil__header__navbar desktop-version'>
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
                    <a href="#page__salesforce-profil-contact" className='salesforce-contact-link' id="salesforce-contact-link-contact" >
                        <span className='displayed-content' onClick={()=>setEmitScrollEvent(true)}>Contact</span>
                        <span className='hidden-content' onClick={()=>setEmitScrollEvent(true)}>Contact</span>
                    </a>
                </li>
            </ul> 
            <div className={`${showMobileMenu ? 'menu-mobile open ':'menu-mobile' }`}>            
                <button  onClick={()=> setShowMobileMenu(!showMobileMenu)}>
                    {!showMobileMenu ? <GiHamburgerMenu /> : <MdClose />}
                </button>
                
                {
                    showMobileMenu && 
                    <ul className='page__salesforce-profil__header__navbar mobile-version'>
                    <li>
                        {   languageEng ? 
                            <a href="#page__salesforce-profil-about" className='salesforce-contact-link'>
                                <span className=''>About</span>
                            </a>:
                            <a href="#page__salesforce-profil-about" className='salesforce-contact-link'>
                                <span className=''>A propos</span>
                            </a>
                        }
                    </li>
                    <li>
                        {   languageEng ?
                            <a href="#page__salesforce-portfolio" className='salesforce-contact-link'>
                                <span className=''>Webs projects</span>
                            </a>
                            :
                            <a href="#page__salesforce-portfolio" className='salesforce-contact-link'>
                                <span className=''>Projets webs</span>
                            </a>
                        }
                    </li>
                    <li>
                        {   languageEng ?
                            <a href="#page__salesforce-profil-exppro" className='salesforce-contact-link'>
                                <span className=''>Professional Experiences</span>
                            </a>
                            :
                            <a href="#page__salesforce-profil-exppro" className='salesforce-contact-link'>
                                <span className=''onClick={()=>setEmitScrollEvent(true)} >Experiences pro</span>
                            </a>
                        }
                    </li>
                    <li>
                        <a href="#page__salesforce-profil-contact" className='salesforce-contact-link'>
                            <span className='' onClick={()=>setEmitScrollEvent(true)}>Contact</span>
                        </a>
                    </li>
                </ul>
                }
            </div>
        </nav>
    );
};

export default Navbar;