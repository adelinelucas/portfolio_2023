import React from 'react';
import './style.css';
import Socials from '../Socials';
import { FaSalesforce } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className='page__salesforce__footer'>
            <h4><span className='page__salesforce__footer-name'> Adeline LUCAS,</span> <span className='page__salesforce__footer-icon'><FaSalesforce /></span> B to C developer 2024 &copy;</h4>
            <Socials chooseLang={false}/>
        </footer>
    );
};

export default Footer;