import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
const swiperOptions = {
        modules: [Autoplay, Pagination, Navigation],
        slidesPerView: 2,
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
                slidesPerView: 2,
                // spaceBetween: 30,
            },
            1350: {
                slidesPerView: 2,
                // spaceBetween: 30,
            },
        }

        
    };
const Testimonial3 = () => {
    return (
        <>
        <section className="testimonial-section-three">
            <div className="auto-container">
                <div className="sec-title style-three text-center">
                    <span className="sub-title">Customers Feedbacks</span>
                    <h2>What people say about Us</h2>
                </div>
    
                <div className="swiper testimonial-two-slider">
                    <div className="swiper-wrapper">
                                <Swiper {...swiperOptions}>
                                    <SwiperSlide>
                                        <div className="testimonial-block-three">
                                            <div className="inner-box">
                                                <div className="image-box">
                                                    <figure className="image mb-0"><img src="/images/resource/testimonial-3-1.png" alt=""/></figure>
                                                </div>
                                                <div className="content-box">
                                                    <h4 className="title">Marcus Daniel</h4>
                                                    <span>Operator</span>
                                                    <div className="text">Lorem ipsum dolor amet adipiscing, elit author senectius ridiculus velit nec socios licitudin out inceptos quam pulvinar magna.</div>
                                                    <span className="rating">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>                                  
                                        <div className="testimonial-block-three">
                                            <div className="inner-box">
                                                <div className="image-box">
                                                    <figure className="image mb-0"><img src="/images/resource/testimonial-3-2.png" alt=""/></figure>
                                                </div>
                                                <div className="content-box">
                                                    <h4 className="title">Emily Jualn</h4>
                                                    <span>Operator</span>
                                                    <div className="text">Lorem ipsum dolor amet adipiscing, elit author senectius ridiculus velit nec socios licitudin out inceptos quam pulvinar magna.</div>
                                                    <span className="rating">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>                                  
                                        <div className="testimonial-block-three">
                                            <div className="inner-box">
                                                <div className="image-box">
                                                    <figure className="image mb-0"><img src="/images/resource/testimonial-3-1.png" alt=""/></figure>
                                                </div>
                                                <div className="content-box">
                                                    <h4 className="title">Marcus Daniel</h4>
                                                    <span>Operator</span>
                                                    <div className="text">Lorem ipsum dolor amet adipiscing, elit author senectius ridiculus velit nec socios licitudin out inceptos quam pulvinar magna.</div>
                                                    <span className="rating">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </span>
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
export default Testimonial3