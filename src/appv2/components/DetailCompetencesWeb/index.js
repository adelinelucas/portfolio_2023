import React, { useEffect, useState } from 'react';
import './style.css';

const DetaildetailsWeb = ({details}) => {
    const [progressBarBG, setProgressBarBG] = useState('');
    
    useEffect(()=>{
        switch(true){
            case (details.pourcentage <= 50) : 
                setProgressBarBG('neon-blue');
                break;
            case (details.pourcentage <= 60 ): 
                setProgressBarBG('neon-purple');
                break;
            case (details.pourcentage <= 70) : 
                setProgressBarBG('green');
                break;
            case (details.pourcentage <= 75) :
                setProgressBarBG('neon-orange'); 
                break;
            case (details.pourcentage >= 80) : 
                setProgressBarBG('gold');
                break
        }
    },[])

    return (
        <div className='page__salesforce-profil-competencesWeb-details'>
            {details.name && <h4 className='competenceWeb-name'>{details.name}</h4>}
            {details.pourcentage && 
                <div className='competenceWeb-pourcentage progress-bar-container'>
                    <div className={`progress-bar ${progressBarBG}`} style={{ width: `${details.pourcentage * 3.5}px`, height:'28px',}}>

                    </div>
                </div>
            }
        </div>
    );
};

export default DetaildetailsWeb;