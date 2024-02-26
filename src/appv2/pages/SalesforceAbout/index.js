import React from 'react';
import './style.css';
import {useLanguageContext} from '../../../global/contextes/LanguageContexte';

const SalesforceAbout = () => {
    const {languageEng} = useLanguageContext();

    return (
        <section className='page__salesforce-profil-about' id="page__salesforce-profil-about">
            <figure>
                <img src="./images/salesforce_img.png" alt="Salesforce environement illustration" width="550px" />
            </figure>
            <article>
                {languageEng ? 
                    <div className='page__salesforce-profil-about-bluecloud'>
                        <p>After 3 years of experience in commercial management and customer relations, I wanted to take a professional turn towards a technical job, autonomous and constantly evolving. 
                        </p>
                        <p>After a year of alternating between being a full-stack developer, I specialized in the Salesforce environment as a <span><em>B2C developer.</em>.</span>
                        </p>
                        <p>My objective is to join a dynamic team where I can continue to grow and apply my technical skills while contributing to the development of an e-commerce platform. 
                        </p>
                    </div>
                : 
                <div className='page__salesforce-profil-about-bluecloud'>
                    <p>Après 3 ans d'expérience en gestion commerciale et clientèle, j'ai souhaité prendre un tournant professionnel vers un métier technique, autonome en perpétuelle évolution. 
                    </p>
                    <p>Après une année d’alternance en tant de développeuse fullstack, je me suis spécialisée dans l’environnement Salesforce en tant que <span><em>B2C developer</em>.</span>
                    </p>
                    <p>Mon objectif est de rejoindre une équipe dynamique où je pourrais continuer à évoluer et à mettre en pratique mes compétences techniques tout en contribuant au développement d’une plateforme e-commerce. 
                    </p>
                </div>
                }
                
                <figure className='page__salesforce-profil-about-badge'>
                    <img src="./images/b2c_badge.png" className='rotating' alt="Badge Salesforce B2C Commerce developer" width="150px" />
                </figure >
            </article>
        </section>
    );
};

export default SalesforceAbout;