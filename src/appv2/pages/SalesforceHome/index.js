import React from 'react';
import './style.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SalesforceAbout from '../SalesforceAbout';
import SalesforceContact from '../SalesforceContact';
import SalesforceExperiencesPro from '../SalesforceExperiencesPro';
import SalesforcePortfolio from '../SalesforcePorfolio';
import ScrollButton from '../../components/ScrollButton';
import SalesforceCompetencesWeb from '../SalesforceCompetencesWeb';
import {LanguageProvider} from '../../../global/contextes/LanguageContexte';

const SalesforceHome = () => {
    return (
        <LanguageProvider>
            <main className='page__salesforce-profil'>
                <Header/>
                <SalesforceAbout/>
                <div className='page__salesforce-profil-content'>
                    <SalesforceCompetencesWeb />
                    <SalesforcePortfolio/>
                    <SalesforceExperiencesPro />
                    <SalesforceContact />
                </div>
                <Footer/>
                <ScrollButton/>
            </main>
        </LanguageProvider>

    );
};

export default SalesforceHome;