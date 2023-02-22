import Style from '../../styles/Slider.module.css';
import React, { useState } from "react";
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination} from "swiper";
import "swiper/css";
import "swiper/css/pagination";


export default function Slider() {
    const [block,setBlock] = useState([
        {id:1,name:"Men",image:require('./images/men.jpg')},
        {id:2,name:"Women",image:require('./images/women.jpg')},
        {id:3,name:"Classic",image:require('./images/classic.jpg')},
        {id:4,name:"Child",image:require('./images/child.jpg')},
        {id:5,name:"Clothing",image:require('./images/cloths-01.jpg')},
        {id:6,name:"Accessories",image:require('./images/accessories.jpg')},
        {id:7,name:"Clothing",image:require('./images/cloths-02.jpg')},
        {id:8,name:"Sportive",image:require('./images/sportive.jpg')},
    ])
  return (
    <div className={Style.slider}>
        <div className={Style.address}>
            <h1>Categories</h1>
        </div>
            <Swiper
            effect={"coverflow"}
            grabCursor={true}
            spaceBetween={20}
            slidesPerView = {3}
            centeredSlides={true}
            pagination={{"clickable": true}}
            modules={[ Pagination]}
            className="mySwiper"
            breakpoints= {{
                0: {slidesPerView: 1},
                768: {slidesPerView: 3},
                1280: {slidesPerView: 5}
            }}
        >
        {
            block.map(element =>(
                    <SwiperSlide key={element.id}>
                        <div className={Style.image}>
                            <Image src={element.image} alt="image"/>
                        </div>
                        <div className={Style.text}>
                            <p>{element.name}</p>
                        </div>
                    </SwiperSlide>
                ))
           }
        </Swiper>
        </div>
  )
}
