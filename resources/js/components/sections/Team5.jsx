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
const Team5 = () => {
    return (
        <>
        <section className="team-section-four">
            <div className="auto-container">
                <div className="sec-title mb-0 style-three">
                    <span className="sub-title">Our Team Members</span>
                    <h2>Meet Our Team Members</h2>
                </div>
    
                <div className="carousel-outer">
                    <div className="swiper team-three-slider">
                        <Swiper {...swiperOptions}>
                            <SwiperSlide>
                                <div className="team-block-four">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><Link href="page-team-details"><img src="/images/resource/team3-1.png" alt=""/></Link></figure>
                                        </div>
                                        <div className="info-box">
                                            <span className="designation">Manager</span>
                                            <h4 className="name"><Link href="page-team-details">George Edward</Link></h4>
                                            <ul className="social-icon">
                                                <li><Link href="#"><i className="fab fa-facebook"></i></Link></li>
                                                <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
                                                <li><Link href="#"><i className="fab fa-skype"></i></Link></li>
                                                <li><Link href="#"><img src="/images/icons/icon-6.png" alt="/"/></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="team-block-four">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><Link href="page-team-details"><img src="/images/resource/team3-2.png" alt=""/></Link></figure>
                                        </div>
                                        <div className="info-box">
                                            <span className="designation">Manager</span>
                                            <h4 className="name"><Link href="page-team-details">Mia Martinez</Link></h4>
                                            <ul className="social-icon">
                                                <li><Link href="#"><i className="fab fa-facebook"></i></Link></li>
                                                <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
                                                <li><Link href="#"><i className="fab fa-skype"></i></Link></li>
                                                <li><Link href="#"><img src="/images/icons/icon-6.png" alt="/"/></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="team-block-four">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><Link href="page-team-details"><img src="/images/resource/team3-3.png" alt=""/></Link></figure>
                                        </div>
                                        <div className="info-box">
                                            <span className="designation">Manager</span>
                                            <h4 className="name"><Link href="page-team-details">Michael Clark</Link></h4>
                                            <ul className="social-icon">
                                                <li><Link href="#"><i className="fab fa-facebook"></i></Link></li>
                                                <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
                                                <li><Link href="#"><i className="fab fa-skype"></i></Link></li>
                                                <li><Link href="#"><img src="/images/icons/icon-6.png" alt="/"/></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="team-block-four">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><Link href="page-team-details"><img src="/images/resource/team3-1.png" alt=""/></Link></figure>
                                        </div>
                                        <div className="info-box">
                                            <span className="designation">Manager</span>
                                            <h4 className="name"><Link href="page-team-details">George Edward</Link></h4>
                                            <ul className="social-icon">
                                                <li><Link href="#"><i className="fab fa-facebook"></i></Link></li>
                                                <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
                                                <li><Link href="#"><i className="fab fa-skype"></i></Link></li>
                                                <li><Link href="#"><img src="/images/icons/icon-6.png" alt="/"/></Link></li>
                                            </ul>
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
export default Team5