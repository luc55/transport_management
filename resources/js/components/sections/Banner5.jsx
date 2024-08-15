import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
const swiperOptions = {
        modules: [Autoplay, Pagination, Navigation],
        slidesPerView: 1,
        autoplay: {
            delay: 8500,
            disableOnInteraction: false,
        },
        loop: true
    };
const Banner5 = () => {
    return (
        <>
        <section className="banner-section banner-section-five">

                <Swiper {...swiperOptions} className="banner-carousel-two owl-carousel owl-theme">
                    <SwiperSlide className="slide-item">
                        <div className="bg-image" style={{ backgroundImage: 'url(images/main-slider/6.jpg)' }}></div>
                        <div className="auto-container">
                            <div className="row">
                                <div className="content-box col-xl-7 col-lg-8 col-md-12 col-sm-12 order-2">
                                    <h1 className="title">Flexibile, Improved <br/>Service Levels & Expedite <br/>Delivery!</h1>
                                    <div className="text">We understand the importance of timely delivery. Our logistics experts <br/>and advanced tracking systems ensure that your freight...</div>
                                    <div className="btn-box">
                                        <Link href="page-about" className="theme-btn btn-style-two"><i className="icon fa fas fa-plus"></i><span className="btn-title">Request A Quote</span></Link>
                                        <Link href="page-about" className="theme-btn btn-style-two"><i className="icon fa fas fa-plus"></i><span className="btn-title">Our Services</span></Link>
                                    </div>
                                </div>
                                <div className="image-column col-xl-5 col-lg-4 col-md-12 col-sm-12 order-lg-2">
                                    <div className="image-box">
                                        <figure className="image"><img src="/images/main-slider/7.png" alt=""/>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="slide-item">
                        <div className="bg-image" style={{ backgroundImage: 'url(images/main-slider/6.jpg)' }}></div>
                        <div className="auto-container">
                            <div className="row">
                                <div className="content-box col-xl-7 col-lg-8 col-md-12 col-sm-12 order-2">
                                    <h1 className="title">Flexibile, Improved <br/>Service Levels & Expedite <br/>Delivery!</h1>
                                    <div className="text">We understand the importance of timely delivery. Our logistics experts <br/>and advanced tracking systems ensure that your freight...</div>
                                    <div className="btn-box">
                                        <Link href="page-about" className="theme-btn btn-style-two"><i className="icon fa fas fa-plus"></i><span className="btn-title">Request A Quote</span></Link>
                                        <Link href="page-about" className="theme-btn btn-style-two"><i className="icon fa fas fa-plus"></i><span className="btn-title">Our Services</span></Link>
                                    </div>
                                </div>
                                <div className="image-column col-xl-5 col-lg-4 col-md-12 col-sm-12 order-lg-2">
                                    <div className="image-box">
                                        <figure className="image"><img src="/images/main-slider/7.png" alt=""/>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
        </section>
        </>
    );
};
export default Banner5