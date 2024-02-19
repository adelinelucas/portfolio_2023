import React from 'react';
import './style.css';

const SalesforceAbout = () => {
    return (
        <section className='page__salesforce-profil-about' id="page__salesforce-profil-about">
            <figure>
                <img src="./images/salesforce_img.png" alt="" width="550px" />
            </figure>
            <article>
                <div className='page__salesforce-profil-about-bluecloud'>
                    <p>Après 3 ans d'expérience en gestion commerciale et clientèle, j'ai souhaité prendre un tournant professionnel vers un métier technique, autonome en perpétuelle évolution. 
                    </p>
                    <p>Après une année d’alternance en tant de développeuse fullstack, je me suis spécialisée dans l’environnement Salesforce en tant que <span><em>B2C developer</em>.</span>
                    </p>
                    <p>Mon objectif est de rejoindre une équipe dynamique où je pourrais continuer à évoluer et à mettre en pratique mes compétences techniques tout en contribuant au développement d’une plateforme e-commerce. 
                    </p>
                </div>
                <figure className='page__salesforce-profil-about-badge'>
                    <img src="./images/b2c_badge.png" alt="Badge Salesforce B2C Commerce developer" width="150px" />
                </figure >
            </article>
        </section>
    );
};

export default SalesforceAbout;