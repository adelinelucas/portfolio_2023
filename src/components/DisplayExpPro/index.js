import React,{ useState } from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPuzzlePiece, faScrewdriverWrench, faGear, faGraduationCap, faChevronCircleUp, faChevronCircleDown, faFloppyDisk } from '@fortawesome/free-solid-svg-icons';

const DisplayExpPro = ({infos, expType}) => {
    const [show, setShow] = useState(false);
    return (
        <article className='exp-pro__article'>
            <div className='exp-pro__article-header' >
                <div className='exp-pro__article-header-btn'>
                    <button onClick={()=>{setShow(!show)}}>
                        {
                            show ? <FontAwesomeIcon icon={faChevronCircleUp} color="#504EE8" />: <FontAwesomeIcon icon={faChevronCircleDown} color="#504EE8" />
                        }
                    </button> 
                </div>
                <div>
                    <h3>{infos.formation}</h3>
                    <i>{infos.centreFormation} <span>{infos.dateDebut} - {infos.dateFin}</span></i>
                </div>
                
            </div>          
            
            {show && 
                <div>
                    <p>{infos.description}</p>
                    <p>{infos.miseEnPratique}</p>
                    <div className='exp-pro__article-separator'></div>
                    <p>{ expType != "formationUniversitaire" && infos.langages.map((tech, indice)=>(
                        <span key={indice}>
                            { expType === "webDev" && <FontAwesomeIcon icon={faFloppyDisk} color="#504EE8" />}
                            { expType === "avantReconversion" && <FontAwesomeIcon icon={faGear} color="#504EE8" />}
                            {tech}
                        </span>
                    ))}</p>
                </div>
            }
            
            
        </article>
    );
};

export default DisplayExpPro;