import React, { useEffect, useState } from 'react';
import './style.css';

const DetaildetailsWeb = ({details}) => {
    const [progressBarBG, setProgressBarBG] = useState(0);
    const [widthSize, setWidthSize] = useState({width: window.innerWidth});
    const [progressBarSize, setProgressBarSize] = useState();

    const handleResize = () => {
        setWidthSize({
          width: window.innerWidth,
        });
    };

    const handleProgressBarSize=( widthScreen)=>{
        if(widthScreen.width <= '992')  {
            setProgressBarSize(details.pourcentage * 1.75)
        }else if(widthScreen.width > '992' && widthScreen.width < '1400'){
            setProgressBarSize(details.pourcentage *2)
        }else{
            setProgressBarSize(details.pourcentage * 3.5)
        }
    }

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
        };
        
        window.addEventListener('resize', handleResize);
        handleProgressBarSize(widthSize);
        return () => {
            window.removeEventListener('resize', handleResize);
          };
    },[])

    return (
        <div className='page__salesforce-profil-competencesWeb-details'>
            {details.name && <h4 className='competenceWeb-name'>{details.name}</h4>}
            {details.pourcentage && 
                <div className='competenceWeb-pourcentage progress-bar-container'>
                    <div className={`progress-bar ${progressBarBG}`} style={{ width: `${progressBarSize}px`, height:'28px',}}>

                    </div>
                </div>
            }
        </div>
    );
};

export default DetaildetailsWeb;