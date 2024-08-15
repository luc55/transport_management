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
const Projects52 = () => {
    return (
        <>
        <section className="project-section-five">
            <div className="outer-box">
                <div className="auto-container">
                    <div className="sec-title style-three mb-0 light">
                        <span className="sub-title">Project We Done</span>
                        <h2>Let’s View Our Latest Projects</h2>
                    </div>
    
                    <div className="carousel-outer">
                        <div className="swiper project-three-slider">
                            <Swiper {...swiperOptions}>
                                <SwiperSlide>
                                    <div className="project-block-five">
                                        <div className="inner-box">
                                            <div className="image-box">
                                                <figure className="image mb-0"><Link href="page-service-details"><img src="/images/resource/project-5.jpg" alt=""/></Link></figure>
                                            </div>
                                            <div className="content-box">
                                                <h4 className="title"><Link href="page-project-details">Exclusive Cargo Shipping</Link></h4>
                                                <div className="text">Lorem ipsum dolor samet consectetur adipiscing elit, nec dapibus tristique egestas felis justo, nunc eros cubilia cras facilisi curabitur posuere massa varius.</div>
                                                <Link href="page-about" className="theme-btn btn-style-two"><i className="icon fa fas fa-plus"></i><span className="btn-title">View Details</span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="project-block-five">
                                        <div className="inner-box">
                                            <div className="image-box">
                                                <figure className="image mb-0"><Link href="page-service-details"><img src="/images/resource/project-5.jpg" alt=""/></Link></figure>
                                            </div>
                                            <div className="content-box">
                                                <h4 className="title"><Link href="page-project-details">Exclusive Cargo Shipping</Link></h4>
                                                <div className="text">Lorem ipsum dolor samet consectetur adipiscing elit, nec dapibus tristique egestas felis justo, nunc eros cubilia cras facilisi curabitur posuere massa varius.</div>
                                                <Link href="page-about" className="theme-btn btn-style-two"><i className="icon fa fas fa-plus"></i><span className="btn-title">View Details</span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="project-block-five">
                                        <div className="inner-box">
                                            <div className="image-box">
                                                <figure className="image mb-0"><Link href="page-service-details"><img src="/images/resource/project-5.jpg" alt=""/></Link></figure>
                                            </div>
                                            <div className="content-box">
                                                <h4 className="title"><Link href="page-project-details">Exclusive Cargo Shipping</Link></h4>
                                                <div className="text">Lorem ipsum dolor samet consectetur adipiscing elit, nec dapibus tristique egestas felis justo, nunc eros cubilia cras facilisi curabitur posuere massa varius.</div>
                                                <Link href="page-about" className="theme-btn btn-style-two"><i className="icon fa fas fa-plus"></i><span className="btn-title">View Details</span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="project-block-five">
                                        <div className="inner-box">
                                            <div className="image-box">
                                                <figure className="image mb-0"><Link href="page-service-details"><img src="/images/resource/project-5.jpg" alt=""/></Link></figure>
                                            </div>
                                            <div className="content-box">
                                                <h4 className="title"><Link href="page-project-details">Exclusive Cargo Shipping</Link></h4>
                                                <div className="text">Lorem ipsum dolor samet consectetur adipiscing elit, nec dapibus tristique egestas felis justo, nunc eros cubilia cras facilisi curabitur posuere massa varius.</div>
                                                <Link href="page-about" className="theme-btn btn-style-two"><i className="icon fa fas fa-plus"></i><span className="btn-title">View Details</span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};
export default Projects52