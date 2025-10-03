import React, {useState} from 'react'
import "./gameSlide.css"
import { SwiperSlide } from 'swiper/react'
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules'; 

const GameSlide = ({ el, handleToggleVideo, active }) => {



    return (
            <div className='gameSlider'>
                <img src={el.img} alt="Game Image" />
                <div className={`video ${active ? 'active' : undefined}`}>
                    <iframe
                        width={1280}
                        height={720}
                        src={el.trailer}
                        title={el.title}
                        allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="content">
                    <h2>{el.title}</h2>
                    <p>{el.description}</p>
                    <div className='buttons'>
                        <a href="#" className="orderBtn">Order Now</a>
                        <a href="#" className={`playBtn ${active ? "active" : undefined}`} onClick={handleToggleVideo}>
                            <span className='pause'>
                                <i className="bi bi-pause-fill"></i>
                            </span>
                            <span className='play'>
                                <i className="bi bi-play-fill"></i>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
    )
}

export default GameSlide