import React, { useEffect, useState } from 'react';
import '../../App.scss';
import Loader from 'react-loaders';
import './style.css';
import data from '../../datas/projetsweb.json';
import DisplayWebProjects from '../../components/DisplayWebProjects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComputerMouse } from '@fortawesome/free-solid-svg-icons';

const Portfolio = () => {
    const {projetsWeb} = data;
    const [projectToDisplay, setProjectToDisplay] = useState(projetsWeb);
    const techArray = ['Javascript','NodeJS','PHP'];
    const handleClick = (tech)=>{
        const techTrim = tech.trim();
        const selectedTech = projetsWeb.filter((tech)=> (tech.technosTag.includes(techTrim)));
        setProjectToDisplay(selectedTech);
    }   

    const [renderLoader, setRenderLoader] = useState(true);
    useEffect(()=>{          
        const timer = setTimeout(() => {
            setRenderLoader(false) ;
                    console.log(renderLoader)
            }, 1000);
        
        return () => clearTimeout(timer);

    }, [])

    if(renderLoader) return <Loader type='ball-rotate'/>
    
    return (
        <main className='portfolio'>
            <header>
                <div>
                    <figure>
                        <img src="./images/screen.png" alt="formation développeur" width="70"/>
                    </figure>
                    <h2>Projets webs</h2>
                    <figure>
                        <img src="./images/screen.png" alt="formation développeur" width="70"/>
                    </figure>
                </div>
                <p>Projets webs réalisés en formation, en alternance.</p>
                <nav>
                    <ul>
                        {
                            techArray.map((tech, index)=>(
                                <li key={index} onClick={()=>{handleClick(tech)}}><FontAwesomeIcon icon={faComputerMouse} color="#fff"/>{tech.toUpperCase()}</li>
                            ))
                        }
                    </ul>
                </nav>
            </header>

            <section className='portfolio__section'>
                {
                    projectToDisplay.map((project, idx)=>{
                        if(project.visibility === 'true') return project.visibility && <DisplayWebProjects key={idx} project={project}/>
                    }

                    )
                }
            </section>

        </main>
    );
};

export default Portfolio;