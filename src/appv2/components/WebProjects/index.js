import React, { useEffect } from 'react';
import './style.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import data from '../../../global/datas/webprojects.json';
import data_en from '../../../global/datas/webprojects_en.json';
import { FaLaptopCode } from "react-icons/fa6";
import { TbTargetArrow } from "react-icons/tb";
import {useLanguageContext} from '../../../global/contextes/LanguageContexte';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { EffectCards } from 'swiper/modules';

const WebProjects = () => {
    const {languageEng} = useLanguageContext();
    let {projetsWeb} = data;
    projetsWeb = [...projetsWeb].reverse().filter((projet) => projet.visibility === "true");

    // if(languageEng) {
    //     projetsWeb = data_en.webProjects;
    //     projetsWeb = [...projetsWeb].reverse().filter((project) => project.visibility === "true");
    // }else{
    //     projetsWeb = [...projetsWeb].reverse().filter((projet) => projet.visibility === "true");
    // }
    
    useEffect(()=>{
        if(languageEng) {
            projetsWeb = data_en.webProjects;
            projetsWeb = [...projetsWeb].reverse().filter((projet) => projet.visibility === "true");
        }else{
            projetsWeb = data.projetsWeb;
            projetsWeb = [...projetsWeb].reverse().filter((projet) => projet.visibility === "true");
        }
    },[languageEng])

    return (
        <Swiper
            slidesPerView={2}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
            clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            {
                projetsWeb.map((projet, index)=>(
                    <SwiperSlide key={index}>
                        <article className='webproject-card'>
                            <figure className='webproject-card-bg'>
                                <img src={projet.cover ? projet.cover : './images/internet.png'} alt={projet.titre} />
                            </figure>
                            <div className='webproject-card-content'>
                                <header>
                                    <h4>{projet.titre}</h4>
                                    <p><TbTargetArrow /> 
                                        {languageEng ? "Project" : "Projet" } {projet.typeProjet}
                                    </p>
                                    <h5>{projet.technosTag.map((tech, i)=>(
                                        <span key={i}>{tech}</span>
                                    ))}</h5>
                                </header>
                                <footer>
                                    { projet.url ?  
                                        <button><FaLaptopCode />
                                            <a href={projet.url} target='_blank'>
                                                {languageEng ? "See project" : "Voir le projet"}
                                            </a>
                                        </button>
                                        :''
                                    }
                                </footer>
                            </div>
                            <div className='webproject-card-content-hover'>
                                <p>{projet.description}</p>
                            </div>
                        </article>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
};

export default WebProjects;