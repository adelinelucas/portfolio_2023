import React from 'react';
import { FaGithub, FaLinkedin  } from "react-icons/fa";
import './style.css';

const Socials = () => {
    return (
        <aside className='page__salesforce-profil__header-socials'>
            <h4><a href="https://github.com/adelinelucas?tab=repositories" target='blank'></a><FaGithub /></h4>
            <h4><a href="https://www.linkedin.com/in/adeline-lucas-web-dev/" target='blank'></a><FaLinkedin  /></h4>
        </aside>
    );
};

export default Socials;