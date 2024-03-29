import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import Logo from '../Logo';
import Socials from '../Socials';
import './style.css';

const Header = () => {
    const [bgNavbar, setBgNavbar] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          const scrollY = window.scrollY;
          if (scrollY > 10) {
            setBgNavbar(true);
          } else {
            setBgNavbar(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        <header className='page__salesforce-profil__header' id="hautPage">
            <section className={`page__salesforce-profil__header__section ${bgNavbar ? 'fixed' : ''}`}>
                <Navbar />
                <Socials chooseLang={true}/>
            </section>
            <Logo />
        </header>

    );
};

export default Header;