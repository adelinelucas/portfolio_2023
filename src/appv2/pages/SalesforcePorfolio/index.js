import React from 'react';
import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import './style.css';
import WebProjects from '../../components/WebProjects';
import {useLanguageContext} from '../../../global/contextes/LanguageContexte';

register();

const SalesforcePortfolio = () => {
    
    const {languageEng} = useLanguageContext();

    return (
        <>
            <section className='page__salesforce-portfolio' id="page__salesforce-portfolio">
                <h2>{
                    languageEng ? 
                    "Web Projects" :
                    'Projets webs'
                }</h2>
            </section>
            <WebProjects/>
        </>
        
    );
};

export default SalesforcePortfolio;