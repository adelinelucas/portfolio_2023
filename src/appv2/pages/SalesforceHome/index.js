import React, { useRef, useEffect } from 'react';
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
import {useLanguageContext} from '../../../global/contextes/LanguageContexte';

const SalesforceHome = () => {

    const mainRef= useRef();
    const {emitScrollEvent,setEmitScrollEvent} = useLanguageContext();

    const updateBackgroundHeight = () => {
        let contactNavEl = document.getElementById('salesforce-contact-link-contact');
        const mainElement = mainRef.current;

        if (mainElement) {
            let height = mainElement.clientHeight;
            if(emitScrollEvent){
                height = height - 300;
                setEmitScrollEvent(false)
            }
            mainElement.style.setProperty('--background-height', `${height}px`);
        }
    };
    useEffect(() => {    
        window.addEventListener('resize', updateBackgroundHeight);
        window.addEventListener('scroll', updateBackgroundHeight);
        updateBackgroundHeight();
    
        return () => {
          window.removeEventListener('resize', updateBackgroundHeight);
          window.removeEventListener('scroll', updateBackgroundHeight);
        };
      }, [emitScrollEvent]);

    return (
        <main className='page__salesforce-profil' ref={mainRef} >
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
    );
};

export default SalesforceHome;