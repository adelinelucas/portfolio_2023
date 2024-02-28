import React, {useState, useEffect} from 'react';
import './style.css'; 
import { Chrono } from "react-chrono";
import data from '../../../global/datas/exppro.json';
import data_en from '../../../global/datas/exppro_en.json';
import { FaComputer } from "react-icons/fa6";
import { IoBusinessSharp } from "react-icons/io5";
import { TiBusinessCard } from "react-icons/ti";
import {useLanguageContext} from '../../../global/contextes/LanguageContexte';


const SalesforceExperiencesPro = () => {
    const {languageEng} = useLanguageContext();
    let {webDev, avantReconversion, formationUniversitaire} = data 
    const [widthSize, setWidthSize] = useState( window.innerWidth);
    const [smallScreen, setSmallScreen] = useState(false)

    const handleResize = () => {
        setWidthSize(window.innerWidth);
    };

    const detectSmallScreen = () => {
        if(widthSize < '1400'){
            setSmallScreen(true)
        }else{
            setSmallScreen(false)
        }
    };

    useEffect(()=>{
        window.addEventListener('resize', handleResize);
        detectSmallScreen();
        return () => {
            window.removeEventListener('resize', handleResize);
          };
    },[])

    if(languageEng){
        webDev = data_en.webDev;
        avantReconversion = data_en.avantReconversion;
        formationUniversitaire = data_en.formationUniversitaire;
    }

    return (
        <section className='page__salesforce-profil-exppro' id="page__salesforce-profil-exppro">
            <h2 className=''>
                {languageEng ? 
                    'Professional Experiences'
                    : 'Mes expériences professionnelles'
                }
            </h2>
            <div className=''>
                <h3 className=''><span className='title-icon'><FaComputer /></span>
                    {
                    languageEng ?   
                        'Web Dev Experiences'
                    :   'Mes expériences web dev'
                    }
                </h3>
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
                <h3 className=''>
                    <span className='title-icon'><IoBusinessSharp /></span>
                    { languageEng ? 
                        'My Experiences Before Career Change'
                        : 'Mes expériences avant reconversion'
                    }
                </h3>
                <div className={`${smallScreen ? 'page__salesforce-profil-exppro-horizontal-timeline small-screen ':'page__salesforce-profil-exppro-horizontal-timeline big-screen' }`}>
                    {
                        smallScreen && 
                        <Chrono
                            items={avantReconversion}
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
                    }
                    {!smallScreen &&
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
                    }
                </div>
            </div>
            <div className={`${smallScreen ? 'page__salesforce-profil-exppro-horizontal-timeline-deux small-screen ':'page__salesforce-profil-exppro-horizontal-timeline-deux big-screen' }`}>
                <h3 className=''><span className='title-icon'><TiBusinessCard /></span>                 
                    { languageEng ? 
                        'University Education'
                        : 'Ma formation universitaire'
                    }
                </h3>
                {smallScreen && 
                    <Chrono
                        items={formationUniversitaire}
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
                }
                {!smallScreen &&
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
                }
            </div>
        </section>
    );
};

export default SalesforceExperiencesPro;