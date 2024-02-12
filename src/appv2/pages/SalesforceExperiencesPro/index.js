import React from 'react';
import './style.css'; 
import { Chrono } from "react-chrono";
import data from '../../../global/datas/exppro.json';
import { FaComputer } from "react-icons/fa6";
import { IoBusinessSharp } from "react-icons/io5";
import { TiBusinessCard } from "react-icons/ti";


const SalesforceExperiencesPro = () => {
    const {webDev, avantReconversion, formationUniversitaire} = data;
    return (
        <section className='page__salesforce-profil-exppro' id="page__salesforce-profil-exppro">
            <h2 className=''>Mes expériences professionnelles</h2>
            <div className=''>
                <h3 className=''><span className='title-icon'><FaComputer /></span>Mes expériences web dev</h3>
                <Chrono
                    items={webDev.reverse()}
                    mode="VERTICAL"
                    timelinePointShape="square"
                    timelinePointDimension={20}
                    theme={{
                        primary: "white",
                        secondary: "#504EE8",
                        cardTitleColor: "#504EE8",
                        cardSubtitleColor:"#8878B2",
                        titleColorActive:"#F2F0F2",
                        titleColor:"#F2F0F2",
                    }}
                />
            </div>
            <div>
                <h3 className=''><span className='title-icon'><IoBusinessSharp /></span>Mes expériences avant reconversion</h3>
                <div className='page__salesforce-profil-exppro-horizontal-timeline'>
                    <Chrono
                        items={avantReconversion}
                        mode="HORIZONTAL"
                        itemWidth={250}
                        showSingle
                        timelinePointShape="square"
                        timelinePointDimension={20}
                        theme={{
                            primary: "white",
                            secondary: "#504EE8",
                            cardTitleColor: "#504EE8",
                            cardSubtitleColor:"#8878B2",
                            titleColorActive:"#F2F0F2",
                            titleColor:"#F2F0F2",
                        }}
                        fontSizes={{
                            cardSubtitle: '0.85rem',
                            cardText: '0.8rem',
                            cardTitle: '1rem',
                            title: '1rem',
                        }}
                    />
                </div>
            </div>
            <div className='page__salesforce-profil-exppro-horizontal-timeline-deux'>
                <h3 className=''><span className='title-icon'><TiBusinessCard /></span>Ma formation universitaire</h3>
                <Chrono
                    items={formationUniversitaire}
                    mode="HORIZONTAL"
                    itemWidth={350}
                    showSingle
                    timelinePointShape="square"
                    timelinePointDimension={20}
                    theme={{
                        primary: "white",
                        secondary: "#504EE8",
                        cardTitleColor: "#504EE8",
                        cardSubtitleColor:"#8878B2",
                        titleColorActive:"#F2F0F2",
                        titleColor:"#F2F0F2",
                    }}
                    fontSizes={{
                        cardSubtitle: '0.85rem',
                        cardText: '0.8rem',
                        cardTitle: '1rem',
                        title: '1rem',
                    }}
                    cardHeight={50}
                 />
            </div>
        </section>
    );
};

export default SalesforceExperiencesPro;