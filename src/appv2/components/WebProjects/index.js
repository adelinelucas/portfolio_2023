import React, { useEffect, useState } from 'react';
import './style.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import data from '../../../global/datas/webprojects.json';
import data_en from '../../../global/datas/webprojects_en.json';
import { FaLaptopCode } from "react-icons/fa6";
import { TbTargetArrow } from "react-icons/tb";
import {useLanguageContext} from '../../../global/contextes/LanguageContexte';
import { BiSolidInfoSquare } from "react-icons/bi";

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
    const [widthSize, setWidthSize] = useState({width: window.innerWidth});
    const [smallScreenSwiper, setSmallScreenSwiper] = useState(false)
    // if(languageEng) {
    //     projetsWeb = data_en.webProjects;
    //     projetsWeb = [...projetsWeb].reverse().filter((project) => project.visibility === "true");
    // }else{
    //     projetsWeb = [...projetsWeb].reverse().filter((projet) => projet.visibility === "true");
    // }
    const handleResize = () => {
        setWidthSize(window.innerWidth);
    };

    const switchSwiper = () => {
        if(widthSize.width < '1400'){
            setSmallScreenSwiper(true)
        }else{
            setSmallScreenSwiper(false)
        }
    };

    useEffect(()=>{
        if(languageEng) {
            projetsWeb = data_en.webProjects;
            projetsWeb = [...projetsWeb].reverse().filter((projet) => projet.visibility === "true");
        }else{
            projetsWeb = data.projetsWeb;
            projetsWeb = [...projetsWeb].reverse().filter((projet) => projet.visibility === "true");
        }
    },[languageEng])

    useEffect(()=>{
        window.addEventListener('resize', handleResize);
        switchSwiper();
        return () => {
            window.removeEventListener('resize', handleResize);
          };
    },[])

    return (
        <>
        { !smallScreenSwiper &&
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
                                        <p className='target-icon'><TbTargetArrow /> 
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
                                <div className='webproject-card-content-details'>
                                    <div className='webproject-card-content-details-show'>
                                        <h3><BiSolidInfoSquare />
                                            Details
                                            <BiSolidInfoSquare />
                                        </h3>
                                    </div>
                                    <div className='webproject-card-content-details-hover'>
                                        <p>{projet.description.map((project,key)=>(
                                            <span key={key}>{project}</span>
                                        ))}</p>
                                    </div>
                                </div>
                            </article>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        } 
        {/* SWIPER VUE MOBILE TABLETTE */}
        { smallScreenSwiper &&
            <Swiper
            pagination={{
                dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mobileSwiper"
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
                                        <p className='target-icon'><TbTargetArrow /> 
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
                                <div className='webproject-card-content-details'>
                                    <div className='webproject-card-content-details-show'>
                                        <h3><BiSolidInfoSquare />
                                            Details
                                            <BiSolidInfoSquare />
                                        </h3>
                                    </div>
                                    <div className='webproject-card-content-details-hover'>
                                        <p>{projet.description.map((project,key)=>(
                                            <span key={key}>{project}</span>
                                        ))}</p>
                                    </div>
                                </div>
                            </article>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        }
        </>
    );
};

export default WebProjects;