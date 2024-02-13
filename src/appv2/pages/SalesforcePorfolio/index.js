import React from 'react';
import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import './style.css';
import WebProjects from '../../components/WebProjects';

register();

const SalesforcePortfolio = () => {
    

    return (
        <>
            <section className='page__salesforce-portfolio' id="page__salesforce-portfolio">
                <h2>Projets webs</h2>
            </section>
            <WebProjects/>
        </>
        
    );
};

export default SalesforcePortfolio;