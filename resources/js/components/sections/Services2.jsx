import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
const swiperOptions = {
        modules: [Autoplay, Pagination, Navigation],
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        loop: true,

				breakpoints:{
            320: {
                slidesPerView: 1,
                // spaceBetween: 30,
            },
            575: {
                slidesPerView: 1,
                // spaceBetween: 30,
            },
            767: {
                slidesPerView: 2,
                // spaceBetween: 30,
            },
            991: {
                slidesPerView: 2,
                // spaceBetween: 30,
            },
            1199: {
                slidesPerView: 3,
                // spaceBetween: 30,
            },
            1350: {
                slidesPerView: 3,
                // spaceBetween: 30,
            },
        }

        
    };
const Services2 = () => {
    return (
        <>
        <section className="services-section-two">
            <div className="auto-container">
                <div className="sec-title mb-0 light wow fadeInUp">
                    <span className="sub-title">Service We Provide</span>
                    <h2>Our Services To Explore</h2>
                </div>
    
                <div className="carousel-outer">
                    <div className="swiper service-two-slider">
                        <Swiper {...swiperOptions}>
                            <SwiperSlide>
                                <div className="services-block-two">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image mb-0"><Link href="page-service-details"><img src="/images/resource/service2-2.jpg" alt=""/></Link></figure>
                                        </div>
                                        <div className="content-box">
                                            <h4 className="title"><a href="page-project-details.html">Ocean Freight</a></h4>
                                            <div className="text">Train freight is commonly used for high-value...</div>
                                            <ul className="list-style-two">
                                                <li>Flexibility & Versatility</li>
                                                <li>Controlled Environment</li>
                                                <li>Speed and Efficiency</li>
                                            </ul>
                                            <Link href="page-about" className="theme-btn btn-style-two dark-bg"><i className="icon fa fas fa-plus"></i><span className="btn-title">Read Details</span></Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="services-block-two">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image mb-0"><Link href="page-service-details"><img src="/images/resource/service2-3.jpg" alt=""/></Link></figure>
                                        </div>
                                        <div className="content-box">
                                            <h4 className="title"><a href="page-project-details.html">Ocean Freight</a></h4>
                                            <div className="text">Train freight is commonly used for high-value...</div>
                                            <ul className="list-style-two">
                                                <li>Flexibility & Versatility</li>
                                                <li>Controlled Environment</li>
                                                <li>Speed and Efficiency</li>
                                            </ul>
                                            <Link href="page-about" className="theme-btn btn-style-two dark-bg"><i className="icon fa fas fa-plus"></i><span className="btn-title">Read Details</span></Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="services-block-two">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image mb-0"><Link href="page-service-details"><img src="/images/resource/service2-4.jpg" alt=""/></Link></figure>
                                        </div>
                                        <div className="content-box">
                                            <h4 className="title"><a href="page-project-details.html">Ocean Freight</a></h4>
                                            <div className="text">Train freight is commonly used for high-value...</div>
                                            <ul className="list-style-two">
                                                <li>Flexibility & Versatility</li>
                                                <li>Controlled Environment</li>
                                                <li>Speed and Efficiency</li>
                                            </ul>
                                            <Link href="page-about" className="theme-btn btn-style-two dark-bg"><i className="icon fa fas fa-plus"></i><span className="btn-title">Read Details</span></Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="services-block-two">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image mb-0"><Link href="page-service-details"><img src="/images/resource/service2-2.jpg" alt=""/></Link></figure>
                                        </div>
                                        <div className="content-box">
                                            <h4 className="title"><a href="page-project-details.html">Ocean Freight</a></h4>
                                            <div className="text">Train freight is commonly used for high-value...</div>
                                            <ul className="list-style-two">
                                                <li>Flexibility & Versatility</li>
                                                <li>Controlled Environment</li>
                                                <li>Speed and Efficiency</li>
                                            </ul>
                                            <Link href="page-about" className="theme-btn btn-style-two dark-bg"><i className="icon fa fas fa-plus"></i><span className="btn-title">Read Details</span></Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};
export default Services2