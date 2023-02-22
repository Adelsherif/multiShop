import React, { useState } from 'react';
import Image from 'next/image';
import Style from '../../styles/Blogs.module.css';
import {HiOutlineX} from 'react-icons/hi';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

export default function Blogs() {
    const [toggle,setToggle] = useState(0);
    var num=1;
    const [src,setSrc] = useState([
        {id:1,image:require('./images/blogs-01.jpg')},
        {id:2,image:require('./images/blogs-02.jpg')},
        {id:3,image:require('./images/blogs-03.jpg')},
        {id:4,image:require('./images/blogs-04.jpg')},
        {id:5,image:require('./images/blogs-05.jpg')},
        {id:6,image:require('./images/blogs-06.jpg')}
    ]);
  return (
    <div className={Style.blogs} id="blogs">
        <div className='container'>
        <div className='head'>
            <h1><span>Our</span> Blogs</h1>
            <p>You will find what dou you want.</p>
        </div>
        {
            toggle !== 0 ?(
                <div className={Style.gallery}>
                <div className={Style.icon} onClick={() => setToggle(0)}><HiOutlineX /></div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper" >
                    {
                        src.map(element =>
                            <SwiperSlide key={element.id} className={Style.images}>
                                <Image src={element.image} alt="image" width="0" height="0" style={{ width: '100%', height: '100%' }} />
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>
            ):""
        }
        <div className={Style.blocks}>
                <div className={Style.block}>
                    <div className={Style.images}>
                    <Image src={src[0].image} alt="image" width="0" height="0" style={{ width: '100%', height: '100%' }} />
                    <Image src={src[1].image} alt="image" width="0" height="0" style={{ width: '100%', height: '100%' }} />
                    </div>
                    <div className={Style.text}>
                        <p>Men Modeling</p>
                    </div>
                </div>
                <div className={Style.block}>
                    <div className={Style.images}>
                    <Image src={src[2].image} alt="image" width="0" height="0" style={{ width: '100%', height: '100%' }} />
                    <Image src={src[3].image} alt="image" width="0" height="0" style={{ width: '100%', height: '100%' }} />
                    </div>
                    <div className={Style.text}>
                        <p>Shopping</p>
                    </div>
                </div>
                <div className={Style.block}>
                    <div className={Style.images}>
                    <Image src={src[4].image} alt="image" width="0" height="0" style={{ width: '100%', height: '100%' }} />
                    <Image src={src[5].image} alt="image" width="0" height="0" style={{ width: '100%', height: '100%' }} />
                    </div>
                    <div className={Style.text}>
                        <p>Women Modeling</p>
                    </div>
                </div>
        </div>
        <div className={Style.btn}>
            <button onClick={() => setToggle(1)}>Gallery</button>
        </div>
        </div>
    </div>
  )
}
