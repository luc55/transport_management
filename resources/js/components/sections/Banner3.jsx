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
const Banner3 = () => {
    return (
        <>
        <section className="banner-section-three">

                <Swiper {...swiperOptions} className="banner-carousel-three owl-carousel owl-theme">
                    <SwiperSlide className="slide-item">
                        <div className="bg-image" style={{ backgroundImage: 'url(images/main-slider/3.jpg)' }}></div>
                        <div className="auto-container">
                            <div className="content-box">
                            <h3 className="sub-title">Consistent & Reliable...</h3>
                            <h1 className="title">Business Solution</h1>
                            <ul>
                                <li><i className="fa fa-solid fa-arrow-right"></i>For Your Newly Started Company</li>
                                <li><i className="fa fa-solid fa-arrow-right"></i>Easy To Fast Starup Growth</li>
                            </ul>
                            <div className="btn-box">
                                <Link href="page-about" className="theme-btn btn-style-two hvr-light"><i className="icon fa fas fa-plus"></i><span className="btn-title">Request A Quote</span></Link>
                            </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="slide-item">
                        <div className="bg-image" style={{ backgroundImage: 'url(images/main-slider/3.jpg)' }}></div>
                        <div className="auto-container">
                            <div className="content-box">
                            <h3 className="sub-title">Consistent & Reliable...</h3>
                            <h1 className="title">Business Solution</h1>
                            <ul>
                                <li><i className="fa fa-solid fa-arrow-right"></i>For Your Newly Started Company</li>
                                <li><i className="fa fa-solid fa-arrow-right"></i>Easy To Fast Starup Growth</li>
                            </ul>
                            <div className="btn-box">
                                <Link href="page-about" className="theme-btn btn-style-two hvr-light"><i className="icon fa fas fa-plus"></i><span className="btn-title">Request A Quote</span></Link>
                            </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
        </section>
        </>
    );
};
export default Banner3