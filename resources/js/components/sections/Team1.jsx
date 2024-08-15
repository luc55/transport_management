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
const Team1 = ({ addClass }) => {
    return (
        <>
        <section className={`team-section ${addClass}`}>
            <div className="auto-container">
                <div className="sec-title style-two text-center wow fadeInUp">
                    <span className="sub-title">Our Professionals</span>
                    <h2>Meet Our Team Members</h2>
                </div>
    
                <div className="carousel-outer style-two">
    
                    <div className="swiper team-slider">
                        <div className="swiper-wrapper">
                            <Swiper {...swiperOptions}>
                                <SwiperSlide>
                                    <div className="team-block">
                                        <div className="inner-box">
                                            <div className="image-box">
                                                <figure className="image"><Link href="page-team-detail"><img src="/images/resource/team-1.jpg" alt=""/></Link></figure>
                                            </div>
                                            <div className="info-box">
                                                <h4 className="name"><Link href="page-team-details">Andrew Thomas</Link></h4>
                                                <span className="designation">Director</span>
                                                <div className="social-links">
                                                    <Link href="tel:+598 2562 2153"><i className="icon fa fa-phone"></i>+598 2562 2153</Link>
                                                    <Link href="mailto:info@user.com"><i className="icon fa fa-envelope"></i>info@user.com</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="team-block">
                                        <div className="inner-box">
                                            <div className="image-box">
                                                <figure className="image"><Link href="page-team-detail"><img src="/images/resource/team-2.jpg" alt=""/></Link></figure>
                                            </div>
                                            <div className="info-box">
                                                <h4 className="name"><Link href="page-team-details">Michael Nicholas</Link></h4>
                                                <span className="designation">Director</span>
                                                <div className="social-links">
                                                    <Link href="tel:+598 2562 2153"><i className="icon fa fa-phone"></i>+598 2562 2153</Link>
                                                    <Link href="mailto:info@user.com"><i className="icon fa fa-envelope"></i>info@user.com</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="team-block">
                                        <div className="inner-box">
                                            <div className="image-box">
                                                <figure className="image"><Link href="page-team-detail"><img src="/images/resource/team-3.jpg" alt=""/></Link></figure>
                                            </div>
                                            <div className="info-box">
                                                <h4 className="name"><Link href="page-team-details">Matthew George</Link></h4>
                                                <span className="designation">Director</span>
                                                <div className="social-links">
                                                    <Link href="tel:+598 2562 2153"><i className="icon fa fa-phone"></i>+598 2562 2153</Link>
                                                    <Link href="mailto:info@user.com"><i className="icon fa fa-envelope"></i>info@user.com</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="team-block">
                                        <div className="inner-box">
                                            <div className="image-box">
                                                <figure className="image"><Link href="page-team-detail"><img src="/images/resource/team-1.jpg" alt=""/></Link></figure>
                                            </div>
                                            <div className="info-box">
                                                <h4 className="name"><Link href="page-team-details">Andrew Thomas</Link></h4>
                                                <span className="designation">Director</span>
                                                <div className="social-links">
                                                    <Link href="tel:+598 2562 2153"><i className="icon fa fa-phone"></i>+598 2562 2153</Link>
                                                    <Link href="mailto:info@user.com"><i className="icon fa fa-envelope"></i>info@user.com</Link>
                                                </div>
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
export default Team1