import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
const swiperOptions = {
        modules: [Autoplay, Pagination, Navigation],
        slidesPerView: 2,
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
                slidesPerView: 2,
                // spaceBetween: 30,
            },
            1350: {
                slidesPerView: 2,
                // spaceBetween: 30,
            },
        }

        
    };
const Services1 = () => {
    return (
        <>
        <section className="services-section">
            <div className="auto-container">
                <div className="sec-title mb-0 wow fadeInUp">
                    <span className="sub-title">Service We Provide</span>
                    <h2>Our Services To Explore</h2>
                </div>
    
                <div className="carousel-outer style-two">
    
                    <div className="swiper service-slider">
                        <Swiper {...swiperOptions}>
                            <SwiperSlide>
                                <div className="services-block">
                                    <div className="inner-box">
                                        <div className="content-box">
                                            <span className="sub-title">Service 1</span>
                                            <h4 className="title"><Link href="page-project-details">Ocean Freight</Link></h4>
                                            <div className="text">We’ll keep your items damage <br/>free solution</div>
                                            <ul className="list-style-two">
                                                <li>Flexibility & Versatility</li>
                                                <li>Controlled Environment</li>
                                                <li>Speed and Efficiency</li>
                                            </ul>
                                            <Link href="page-about" className="theme-btn btn-style-one"><i className="icon fa fas fa-plus"></i><span className="btn-title">Read Details</span></Link>
                                        </div>
                                        <div className="image-box">
                                            <figure className="image mb-0"><Link href="page-service-details"><img src="/images/resource/service-1.jpg" alt=""/></Link></figure>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="services-block">
                                    <div className="inner-box">
                                        <div className="content-box">
                                            <span className="sub-title">Service 2</span>
                                            <h4 className="title"><Link href="page-project-details">Train Freight</Link></h4>
                                            <div className="text">We’ll keep your items damage <br/>free solution</div>
                                            <ul className="list-style-two">
                                                <li>Flexibility & Versatility</li>
                                                <li>Controlled Environment</li>
                                                <li>Speed and Efficiency</li>
                                            </ul>
                                            <Link href="page-about" className="theme-btn btn-style-one"><i className="icon fa fas fa-plus"></i><span className="btn-title">Read Details</span></Link>
                                        </div>
                                        <div className="image-box">
                                            <figure className="image mb-0"><Link href="page-service-details"><img src="/images/resource/service-1.jpg" alt=""/></Link></figure>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="services-block">
                                    <div className="inner-box">
                                        <div className="content-box">
                                            <span className="sub-title">Service 1</span>
                                            <h4 className="title"><Link href="page-project-details">Ocean Freight</Link></h4>
                                            <div className="text">We’ll keep your items damage <br/>free solution</div>
                                            <ul className="list-style-two">
                                                <li>Flexibility & Versatility</li>
                                                <li>Controlled Environment</li>
                                                <li>Speed and Efficiency</li>
                                            </ul>
                                            <Link href="page-about" className="theme-btn btn-style-one"><i className="icon fa fas fa-plus"></i><span className="btn-title">Read Details</span></Link>
                                        </div>
                                        <div className="image-box">
                                            <figure className="image mb-0"><Link href="page-service-details"><img src="/images/resource/service-1.jpg" alt=""/></Link></figure>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="services-block">
                                    <div className="inner-box">
                                        <div className="content-box">
                                            <span className="sub-title">Service 2</span>
                                            <h4 className="title"><Link href="page-project-details">Train Freight</Link></h4>
                                            <div className="text">We’ll keep your items damage <br/>free solution</div>
                                            <ul className="list-style-two">
                                                <li>Flexibility & Versatility</li>
                                                <li>Controlled Environment</li>
                                                <li>Speed and Efficiency</li>
                                            </ul>
                                            <Link href="page-about" className="theme-btn btn-style-one"><i className="icon fa fas fa-plus"></i><span className="btn-title">Read Details</span></Link>
                                        </div>
                                        <div className="image-box">
                                            <figure className="image mb-0"><Link href="page-service-details"><img src="/images/resource/service-2.jpg" alt=""/></Link></figure>
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
export default Services1