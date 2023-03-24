import React, { useEffect, useState } from 'react';
import './style.css';

const Home = () => {
    let [baseline, setBaseline] = useState([]);
    let [baselineIndex, setBaselineIndex]= useState(0)
    const speed = 150;
    const injectTab = () =>{
        let tab = document.getElementById('baseline-tab')
        tab.style.borderRight = '4px solid #190F26';
        tab.classList.add('tab-animated')
    }


    useEffect(()=>{
        const interval = setInterval(()=>{
            let timer ;
            const baselineComplete= ' Adeline, dévelopeuse junior';

            if(baselineIndex < baselineComplete.length){
                setBaseline(oldArray => [...oldArray,baselineComplete[baselineIndex]])
                console.log(baselineIndex, baseline)
                setBaselineIndex(baselineIndex++);
                if(baselineIndex === baselineComplete.length){
                    injectTab()
                }
            }else{
                clearTimeout(timer);
            }
        },speed)

        return ()=>{
            clearInterval(interval)
            setBaselineIndex(0);
            setBaseline([])
        }
    }, [])
    return (
        <article className='home__article'>
            <h1 id="baseline">{baseline}<span id="baseline-tab"></span>
            </h1>
            <p>Après une année d'alternance en tant que dévelopeurse full stack, je souhaite rejoindre une équipe de dev !</p>
            <p>Profil fullstack avec une petite préférence pour le front.</p>
            <p>A travers ce portfolio je vous partage les projets que j'ai pu développer en entreprise ou en formation.</p>
            <button>Projets Web</button>
            <p>Forte de cette année d'alternance et de mes précédenets expériences professionnelles, découvrez-en plus sur mon profil et comment je pourrais m'intégrer à votre équipe</p>
            <button>Ma personnalité</button>
        </article>
    );
};

export default Home;