import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
const swiperOptions = {
        modules: [Autoplay, Pagination, Navigation],
        slidesPerView: 3,
        spaceBetween: 30,
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
const Services5 = () => {
    return (
        <>
        <section className="services-section-six">
            <div className="carousel-outer">
                
                <div className="swiper services-six-slider">
                    <div className="swiper-wrapper">
                            <Swiper {...swiperOptions}>
                                <SwiperSlide>
                                    <div className="services-block-six">
                                        <div className="inner-box">
                                            <div className="image-box">
                                                <figure className="image mb-0"><Link href="page-service-details"><img src="/images/resource/service5-1.jpg" alt=""/></Link></figure>
                                            </div>
                                            <div className="content-box">
                                                <div className="inner-box">
                                                    <h3 className="title"><Link href="page-project-details">Transport Solution</Link></h3>
                                                    <div className="number">01</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="services-block-six">
                                        <div className="inner-box">
                                            <div className="image-box">
                                                <figure className="image mb-0"><Link href="page-service-details"><img src="/images/resource/service5-1.jpg" alt=""/></Link></figure>
                                            </div>
                                            <div className="content-box">
                                                <div className="inner-box">
                                                    <h3 className="title"><Link href="page-project-details">Warehousign Solution</Link></h3>
                                                    <div className="number">02</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="services-block-six">
                                        <div className="inner-box">
                                            <div className="image-box">
                                                <figure className="image mb-0"><Link href="page-service-details"><img src="/images/resource/service5-1.jpg" alt=""/></Link></figure>
                                            </div>
                                            <div className="content-box">
                                                <div className="inner-box">
                                                    <h3 className="title"><Link href="page-project-details">Supply Chain Management</Link></h3>
                                                    <div className="number">03</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="services-block-six">
                                        <div className="inner-box">
                                            <div className="image-box">
                                                <figure className="image mb-0"><Link href="page-service-details"><img src="/images/resource/service5-1.jpg" alt=""/></Link></figure>
                                            </div>
                                            <div className="content-box">
                                                <div className="inner-box">
                                                    <h3 className="title"><Link href="page-project-details">Transport Solution</Link></h3>
                                                    <div className="number">01</div>
                                                </div>
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
export default Services5