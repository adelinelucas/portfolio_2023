import React, { useState } from 'react';
import './style.css';
import data from '../../datas/cv.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPuzzlePiece, faScrewdriverWrench, faGear, faGraduationCap, faChevronCircleUp, faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';
import DisplayExpPro from '../DisplayExpPro';

const ExperiencesPro = () => {
    const {webDev, avantReconversion, formationUniversitaire} = data;

    return (
        <>
            {/* <section className='exp-pro__article'>
                <h2>Reconversion en développement web</h2>
                {
                    webDev.map((exp, idx)=>(
                        <article key={idx}>
                            <h3>{exp.formation}</h3>
                            <i>{exp.centreFormation} <span>{exp.dateDebut} - {exp.dateFin}</span></i>
                            <div>
                                <p>{exp.description}</p>
                                <p>{exp.miseEnPratique}</p>
                                <div className='exp-pro__article-separator'></div>
                                <p>{exp.langages.map((tech, indice)=>(
                                    <span key={indice}>
                                        <FontAwesomeIcon icon={faPuzzlePiece} color="#504EE8" />{tech} 
                                    </span>
                                ))}</p>
                            </div>
                            
                        </article>
                    ))
                }
            </section> */}
            <section className='exp-pro__article'>
                <h2>Reconversion en développement web</h2>
                {
                    webDev.map((exp, idx)=>(
                        <DisplayExpPro key={idx} infos={exp} expType="webDev"/>
                    ))
                }
            </section>
            {/* <section className='exp-pro__article'>
                <h2>Expériences avant reconversion</h2>
                {
                    avantReconversion.map((exp, idx)=>(
                        <article key={idx}>
                            <h3>{exp.intituleDePoste}</h3>
                            <i>{exp.société} - <span>{exp.dateDebut} - {exp.dateFin}</span></i>
                            <div className='exp-pro__article-separator'></div>
                            <h4>Missions:</h4>
                            <p>{exp.missions.map((misson, indice)=>(
                                <span key={indice} className="missions">
                                    <FontAwesomeIcon icon={faGear} color="#504EE8" />{misson} 
                                </span>
                            ))}</p>
                        </article>
                    ))
                }
            </section>
            <section className='exp-pro__article'>
                <h2>Formation Universitaire</h2>
                {
                    formationUniversitaire.map((exp, idx)=>(
                        <article key={idx}>
                            <h3>{exp.intituleFormation}</h3>
                            <i>{exp.ecole} - <span>{exp.dateDebut} - {exp.dateFin}</span></i>
                            <div className='exp-pro__article-separator'></div>
                        </article>
                    ))
                }
            </section> */}
        </>
    );
};

export default ExperiencesPro;