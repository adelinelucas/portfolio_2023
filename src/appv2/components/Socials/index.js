import React from 'react';
import { FaGithub, FaLinkedin  } from "react-icons/fa";
import './style.css';

const Socials = ({chooseLang}) => {
    const handleLanguage = () =>{
        // changer le context pour passer en anglais
        console.log('test');
    }

    return (
        <aside className='page__salesforce-profil__header-socials'>
            <h4><a href="https://github.com/adelinelucas?tab=repositories" target='blank'><FaGithub /></a></h4>
            <h4><a href="https://www.linkedin.com/in/adeline-lucas-web-dev/" target='blank'><FaLinkedin /></a></h4>
            {chooseLang=== true &&
                <h4 onClick={handleLanguage}><img src="./images/english_icon.png"  width="45px" alt="Change language to english" title="Change language to english"/></h4>
            }
        </aside>
    );
};

export default Socials;