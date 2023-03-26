import React from 'react';
import './style.css';
import data from '../../datas/cv.json';
import DisplayExpPro from '../../components/DisplayExpPro';

const ExperiencesPro = () => {
    const {webDev, avantReconversion, formationUniversitaire} = data;

    return (
        <section className='exp-pro__section'>
            <article className='exp-pro__section__article'>
                <figure>
                    <h2>Reconversion en développement web</h2>
                    <img src="./images/screen.png" alt="formation développeur" width="150" />
                </figure>
                {
                    webDev.map((exp, idx)=>(
                        <DisplayExpPro key={idx} infos={exp} expType="webDev"/>
                    ))
                }
            </article>
            <article className='exp-pro__section__article'>
                <figure>
                    <h2>Expériences avant reconversion</h2>
                    <img src="./images/screen.png" alt="formation développeur" width="150" />
                </figure>
                {
                    avantReconversion.map((exp, idx)=>(
                        <DisplayExpPro key={idx} infos={exp} expType="avantReconversion"/>
                    ))
                }
            </article>
            <article className='exp-pro__section__article'>
                <figure>
                    <h2>Formation Universitaire</h2>
                    <img src="./images/screen.png" alt="formation développeur" width="150" />
                </figure>
                {
                    formationUniversitaire.map((exp, idx)=>(
                        <DisplayExpPro key={idx} infos={exp} expType="formationUniversitaire"/>
                    ))
                }
            </article>
        </section>
    );
};

export default ExperiencesPro;