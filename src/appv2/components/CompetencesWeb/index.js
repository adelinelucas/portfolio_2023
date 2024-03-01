import React, { useEffect, useState } from 'react';
import './style.css';
import DetailCompetencesWeb from '../DetailCompetencesWeb';
import { LuPlusSquare, LuMinusSquare  } from "react-icons/lu";

const CompetenceWeb = ({competences, title}) => {

    const [openDetails, setOpenDetails] = useState(false); 
    const handleOpenDetail = () =>{
        setOpenDetails(!openDetails)
        console.log('click')
    }


    return (
        <>
            <div className='page__salesforce-profil-competencesWeb-title'>
                <h3 className=''>{title}</h3>
                <div className='detail-icon' onClick={handleOpenDetail}>
                    {openDetails ? <LuMinusSquare  /> : <LuPlusSquare  />}
                </div>
            </div>
           {openDetails && 
           <article>
                {
                    competences.map((competence, idx)=>(
                        <DetailCompetencesWeb key={idx} details={competence}/>
                    ))
                }
            </article>}
        </>
    );
};

export default CompetenceWeb;