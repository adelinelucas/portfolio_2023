import React from 'react';
import './style.css';

const Home = () => {
    return (
        <article className='home__article'>
            <h1>Adeline,<span>développeuse junior en reconversion !</span></h1>
            <p>Après une année d'alternance en tant que dévelopeurse full stack, je souhaite rejoindre une équipe de dev !</p>
            <p>Profil fullstack avec une petite préférence pour le front.</p>
            <p>A travers ce portfolio je vous partage les projets que j'ai pu développer en entreprise ou en formation.</p>
            <button>Projets Web</button>
            <p>Forte de cette année d'alternance et de mes précédenets expériences professionnelles, découvrez-en plus sur mon profil et comment je pourrais m'intégrer à votre équipe</p>
            <button>Ma personnalité</button>
        </article>
    );
};

export default Home;