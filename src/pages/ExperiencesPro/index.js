import React from 'react';
import './style.css';
import data from '../../datas/cv.json';
import DisplayExpPro from '../../components/DisplayExpPro';

const ExperiencesPro = () => {
    const {webDev, avantReconversion, formationUniversitaire} = data;

    return (
        <>
            <section className='exp-pro__section'>
                <h2>Reconversion en développement web</h2>
                {
                    webDev.map((exp, idx)=>(
                        <DisplayExpPro key={idx} infos={exp} expType="webDev"/>
                    ))
                }
            </section>
            <section className='exp-pro__section'>
                <h2>Expériences avant reconversion</h2>
                {
                    avantReconversion.map((exp, idx)=>(
                        <DisplayExpPro key={idx} infos={exp} expType="avantReconversion"/>
                    ))
                }
            </section>
            <section className='exp-pro__section'>
                <h2>Formation Universitaire</h2>
                {
                    formationUniversitaire.map((exp, idx)=>(
                        <DisplayExpPro key={idx} infos={exp} expType="formationUniversitaire"/>
                    ))
                }
            </section>
        </>
    );
};

export default ExperiencesPro;