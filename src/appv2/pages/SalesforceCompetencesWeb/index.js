import React, { useState } from 'react';
import CompetenceWeb from '../../components/CompetencesWeb';
import './style.css'; 
import data from './../../../global/datas/webskils.json';
import {useLanguageContext} from '../../../global/contextes/LanguageContexte';

const SalesforceCompetencesWeb = () => {
    const languages = [...data.webLanguages];
    const frameworks = [...data.frameworks];
    const webTools = [...data.webTools];

    const {languageEng} = useLanguageContext();
    let languageTitle; 
    let webToolsTitle;
    languageEng ? languageTitle ="Stack" : languageTitle ="Langages"; 
    languageEng ? webToolsTitle ="Tools" : webToolsTitle ="Outils" ;

    return (
        <section className='page__salesforce-profil-competencesWeb' id="page__salesforce-profil-competencesWeb">
            {
                languageEng ? 
                    <h2 className=''>My web skills</h2>
                    :
                    <h2 className=''>Mes compétences web</h2>
            }
                <div className='page__salesforce-profil-competencesWeb languages'>
                    <CompetenceWeb competences={languages} title={languageTitle}/>
                </div>
                <div className='page__salesforce-profil-competencesWeb frameworks'>
                    <CompetenceWeb competences={frameworks} title="Frameworks"/>
                </div>
                <div className='page__salesforce-profil-competencesWeb tools'>
                    <CompetenceWeb competences={webTools} title={languageTitle}/>
                </div>
        </section>
    );
};

export default SalesforceCompetencesWeb;