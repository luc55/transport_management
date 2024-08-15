import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
const swiperOptions = {
        modules: [Autoplay, Pagination, Navigation],
        slidesPerView: 4,
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
                slidesPerView: 4,
                // spaceBetween: 30,
            },
            1350: {
                slidesPerView: 4,
                // spaceBetween: 30,
            },
        }

        
    };
const Team2 = () => {
    return (
        <>
        <section className="team-section-two">
            <div className="auto-container">
                <div className="sec-title wow fadeInUp">
                    <span className="sub-title">Our Team Members</span>
                    <h2>Meet the professionals</h2>
                </div>
    
                <div className="swiper team-two-slider">
                        <div className="swiper-wrapper">
                            <Swiper {...swiperOptions}>
                                <SwiperSlide>
                                    <div className="team-block-tow">
                                        <div className="inner-box">
                                            <div className="image-box">
                                                <figure className="image"><Link href="page-team-details"><img src="images/resource/team-1.jpg" alt=""/></Link></figure>
                                                <div className="social-links">
                                                    <Link href="#"><i className="fab fa-facebook"></i></Link>
                                                    <Link href="#"><i className="fab fa-twitter"></i></Link>
                                                    <Link href="#"><i className="fab fa-youtube"></i></Link>
                                                </div>
                                            </div>
                                            <div className="info-box">
                                                <h4 className="name"><Link href="page-team-details">William Samuel</Link></h4>
                                                <span className="designation">Branch Manager</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="team-block-tow">
                                        <div className="inner-box">
                                            <div className="image-box">
                                                <figure className="image"><Link href="page-team-details"><img src="images/resource/team-4.jpg" alt=""/></Link></figure>
                                                <div className="social-links">
                                                    <Link href="#"><i className="fab fa-facebook"></i></Link>
                                                    <Link href="#"><i className="fab fa-twitter"></i></Link>
                                                    <Link href="#"><i className="fab fa-youtube"></i></Link>
                                                </div>
                                            </div>
                                            <div className="info-box">
                                                <h4 className="name"><Link href="page-team-details">Amelia Harper</Link></h4>
                                                <span className="designation">Branch Manager</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="team-block-tow">
                                        <div className="inner-box">
                                            <div className="image-box">
                                                <figure className="image"><Link href="page-team-details"><img src="images/resource/team-5.jpg" alt=""/></Link></figure>
                                                <div className="social-links">
                                                    <Link href="#"><i className="fab fa-facebook"></i></Link>
                                                    <Link href="#"><i className="fab fa-twitter"></i></Link>
                                                    <Link href="#"><i className="fab fa-youtube"></i></Link>
                                                </div>
                                            </div>
                                            <div className="info-box">
                                                <h4 className="name"><Link href="page-team-details">Andrew Joseph</Link></h4>
                                                <span className="designation">Branch Manager</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="team-block-tow">
                                        <div className="inner-box">
                                            <div className="image-box">
                                                <figure className="image"><Link href="page-team-details"><img src="images/resource/team-1.jpg" alt=""/></Link></figure>
                                                <div className="social-links">
                                                    <Link href="#"><i className="fab fa-facebook"></i></Link>
                                                    <Link href="#"><i className="fab fa-twitter"></i></Link>
                                                    <Link href="#"><i className="fab fa-youtube"></i></Link>
                                                </div>
                                            </div>
                                            <div className="info-box">
                                                <h4 className="name"><Link href="page-team-details">William Samuel</Link></h4>
                                                <span className="designation">Branch Manager</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="team-block-tow">
                                        <div className="inner-box">
                                            <div className="image-box">
                                                <figure className="image"><Link href="page-team-details"><img src="images/resource/team-4.jpg" alt=""/></Link></figure>
                                                <div className="social-links">
                                                    <Link href="#"><i className="fab fa-facebook"></i></Link>
                                                    <Link href="#"><i className="fab fa-twitter"></i></Link>
                                                    <Link href="#"><i className="fab fa-youtube"></i></Link>
                                                </div>
                                            </div>
                                            <div className="info-box">
                                                <h4 className="name"><Link href="page-team-details">William Samuel</Link></h4>
                                                <span className="designation">Branch Manager</span>
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
export default Team2