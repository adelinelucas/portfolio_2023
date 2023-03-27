import React from 'react';
import './style.css';
const DisplayWebProjects = ({project, idx}) => {
    console.log(project)
    return (
        <article className='portfolio__section__article' key={idx}>
           <img className='portfolio__section__article-cover' src={project.cover?project.cover : './images/internet.png' } alt={project.title}/>
            <div className='portfolio__section__article-content'>
                <h3 className='portfolio__section__article-title'>{project.titre}</h3>
                <p className='portfolio__section__article-description'> {project.description}</p>
                <p>
                    {
                        project.technosTag.map((tech, index)=>(
                            <span key={index}>{tech}</span>
                        ))
                    }
                </p>
                <a href={project.url} target="_blank" onClick={()=> window.open(project.url)}>Voir le project</a>
                <h4>{project.typeProjet}</h4>
            </div> 
        </article>
    );
};

export default DisplayWebProjects;