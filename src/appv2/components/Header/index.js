import React from 'react';
import Navbar from '../Navbar';
import Logo from '../Logo';
import Socials from '../Socials';
import './style.css';

const Header = () => {
    return (
        <header className='page__salesforce-profil__header'>
            <section>
                <Navbar />
                <Socials/>
            </section>
            <Logo />
        </header>

    );
};

export default Header;