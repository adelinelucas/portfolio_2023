import React,{ useState } from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPuzzlePiece, faScrewdriverWrench, faGear, faBullseye, faChevronCircleUp, faChevronCircleDown, faFloppyDisk } from '@fortawesome/free-solid-svg-icons';

const DisplayExpPro = ({infos, expType}) => {
    const [show, setShow] = useState(false);
    return (
        <article className='exp-pro__article'>
            <div className='exp-pro__article-header' >
                <div className='exp-pro__article-header-btn'>
                    {
                        expType != "formationUniversitaire" && 
                        <button onClick={()=>{setShow(!show)}}>
                            {
                                show ? <FontAwesomeIcon icon={faChevronCircleUp} color="#800077" />: <FontAwesomeIcon icon={faChevronCircleDown} color="#D95B96" />
                            }
                        </button> 
                    }  
                </div>
                <div>
                    <h3>{infos.titre}</h3>
                    <i>{infos.organisme} <span>{infos.dateDebut} - {infos.dateFin}</span></i>
                </div>  
            </div>          
            
            {show && 
                <div>
                    <p>{infos.description}</p>
                    <p>{infos.miseEnPratique}</p>
                    <div className='exp-pro__article-separator'></div>
                    {/* render for webdev */}
                    <p>{ expType === "webDev" && infos?.langages?.map((tech, indice)=>(
                        <span key={indice}>
                            { expType === "webDev" && <FontAwesomeIcon icon={faFloppyDisk} color="#504EE8" />}
                            {tech}
                        </span>
                    ))}</p>
                    {/* render for avantReconversion */}
                    {expType === "avantReconversion" && <h4>Missions:</h4>}
                    <ul>{ expType === "avantReconversion" && infos?.missions?.map((tech, indice)=>(
                        <li key={indice}>
                            { expType === "avantReconversion" && <FontAwesomeIcon icon={faBullseye} color="#800077" />}
                            {tech}
                        </li>
                    ))}</ul>
                </div>
            }    
        </article>
    );
};

export default DisplayExpPro;