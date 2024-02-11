import React, { useEffect, useReducer, useState } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

const Logo = () => {
    const navigate = useNavigate();
    const intro = ['Adeline', 'Web dev'];
    let speed = 600;
    const presArray = intro[0].split('');
    const [textLogo, setTextLogo] = useState([])
    const [textToDisplay, setTextToDisplay] = useState(intro[0])
    let [baselineIndex, setBaselineIndex]= useState(0)
    const animateIntro = () =>{        
        if(textToDisplay[0] == "A") setTextToDisplay(intro[1].split(''));
        else setTextToDisplay(intro[0].split(''))
    }   

    const redirectHome = () => {
        navigate('/webdev')
    }
  
    
    useEffect(()=>{
        const timeout = setTimeout(()=>{
            if(textLogo.length < textToDisplay.length){
                setTextLogo([...textLogo,[textToDisplay.charAt(baselineIndex)] ])
                setBaselineIndex(baselineIndex+1)
            }else{
                setTextToDisplay(intro[1])
                setTextLogo([])
                if(textLogo.join('').includes('Adeline')){
                    // return baselineComplete = intro[1]
                    setBaselineIndex(0);
                    setTextToDisplay(intro[1])
                    setTextLogo([])
                }else{
                    setBaselineIndex(0);
                    setTextToDisplay(intro[0])
                    setTextLogo([])
                }
            }
        }, speed)
        return () => clearTimeout(timeout)
    },[textLogo])

    return (
        <>
            <aside className='header__baseline' >
                {textLogo.join('')}<span className="logo-tab" ></span>            
            </aside>
            <aside className='header__basline-redirect' onClick={redirectHome} >
                <i>Retourner à la page d'accueil</i>
            </aside>
        </>

    );
};

export default Logo;