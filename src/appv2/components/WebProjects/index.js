import React from 'react';
import './style.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import data from '../../../global/datas/webprojects.json';
import { FaLaptopCode } from "react-icons/fa6";
import { TbTargetArrow } from "react-icons/tb";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { EffectCards } from 'swiper/modules';

const WebProjects = () => {
    let {projetsWeb} = data;

    projetsWeb = [...projetsWeb].reverse().filter((projet) => projet.visibility === "true");
    console.log(projetsWeb)

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
                                    <p><TbTargetArrow /> Projet {projet.typeProjet}</p>
                                    <h5>{projet.technosTag.map((tech, i)=>(
                                        <span key={i}>{tech}</span>
                                    ))}</h5>
                                </header>
                                <footer>
                                    { projet.url ?  
                                        <button><FaLaptopCode /><a href={projet.url} target='_blank'>Voir le projet</a></button>
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