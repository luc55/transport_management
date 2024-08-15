import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
const swiperOptions = {
        modules: [Autoplay, Pagination, Navigation],
        slidesPerView: 1,
        autoplay: {
            delay: 8500,
            disableOnInteraction: false,
        },
        loop: true
    };
const Banner4 = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
        <section className="banner-section banner-section-four">

                <Swiper {...swiperOptions} className="banner-carousel-two owl-carousel owl-theme">
                    <SwiperSlide className="slide-item">
                        <div className="bg-image" style={{ backgroundImage: 'url(images/main-slider/5.jpg)' }}></div>
                        <div className="auto-container">
                            <div className="content-box">
                            <h2 className="sub-title">Greater Logistics Service Provider</h2>
                            <h1 className="title">Safe, Reliable And Express <br/>Logistics Solutions</h1>
                            <div className="btn-box">
                                <Link href="page-about" className="theme-btn btn-style-one hvr-light"><i className="icon fa fas fa-plus"></i><span className="btn-title">More About Us</span></Link>

                                <div className="grid-nav-btn">
                                <div className="inner">
                                    <a onClick={() => setOpen(true)} className="lightbox-image"><img className="icons bg-light" src="/images/icons/icon-2.png" alt="Icon"/></a>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="slide-item">
                        <div className="bg-image" style={{ backgroundImage: 'url(images/main-slider/5.jpg)' }}></div>
                        <div className="auto-container">
                            <div className="content-box">
                            <h2 className="sub-title">Greater Logistics Service Provider</h2>
                            <h1 className="title">Safe, Reliable And Express <br/>Logistics Solutions</h1>
                            <div className="btn-box">
                                <Link href="page-about" className="theme-btn btn-style-one hvr-light"><i className="icon fa fas fa-plus"></i><span className="btn-title">More About Us</span></Link>

                                <div className="grid-nav-btn">
                                <div className="inner">
                                    <a onClick={() => setOpen(true)} className="lightbox-image"><img className="icons bg-light" src="/images/icons/icon-2.png" alt="Icon"/></a>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
        </section>
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
        </>
    );
};
export default Banner4