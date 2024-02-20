import React from 'react';
import './style.css';

const Logo = () => {
    return (
        <div className='page__salesforce-profil__header-banner'>
            <figure>
                <img src="./images/salesforce_img2.png" alt="Salesforce environnement illustration"  width="250px"/>
            </figure>
            <h1 className='page__salesforce-profil__header-title'>
                <span>Adeline,</span><span>Salesforce</span> B to C Commerce developer
            </h1>
        </div>
        
    );
};

export default Logo;