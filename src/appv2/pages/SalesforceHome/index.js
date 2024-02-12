import React from 'react';
import './style.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SalesforceAbout from '../SalesforceAbout';
import SalesforceContact from '../SalesforceContact';
import SalesforceExperiencesPro from '../SalesforceExperiencesPro';
const SalesforceHome = () => {
    return (
        <main className='page__salesforce-profil'>
            <Header/>
            <SalesforceAbout/>
            <div className='page__salesforce-profil-content'>
                <SalesforceExperiencesPro />
                <SalesforceContact />
            </div>
            <Footer/>
        </main>
    );
};

export default SalesforceHome;