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
const Projects3 = () => {
    return (
        <>
        <section className="project-section style-two">
            <div className="bg-image" style={{ backgroundImage: 'url(images/background/3.jpg)' }}></div>
            <div className="auto-container">
                <div className="sec-title style-three light">
                    <span className="sub-title">Our Recent Projects</span>
                    <h2>Secure courier for all <br/>your packages</h2>
                </div>
    
                <div className="carousel-outer">
                    <div className="swiper project-two-slider">
                        <div className="swiper-wrapper">
                                <Swiper {...swiperOptions}>
                                    <SwiperSlide>
                                        <div className="project-block">
                                            <div className="inner-box">
                                                <div className="image-box">
                                                    <figure className="image"><Link href="/images/resource/project-1.jpg" className="lightbox-image"><img src="/images/resource/project-1.jpg" alt=""/></Link></figure>
                                                    <Link href="page-project-details" className="icon"><i className="fa fa-solid fa-arrow-right"></i></Link>
                                                </div>
                                                <div className="content-box">
                                                    <h5 className="title"><Link href="page-project-details">Warehouse On-Hand Inventory <br/>To Minimizes Your Spend!</Link></h5>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="project-block">
                                            <div className="inner-box">
                                                <div className="image-box">
                                                    <figure className="image"><Link href="/images/resource/project-2.jpg" className="lightbox-image"><img src="/images/resource/project-2.jpg" alt=""/></Link></figure>
                                                    <Link href="page-project-details" className="icon"><i className="fa fa-solid fa-arrow-right"></i></Link>
                                                </div>
                                                <div className="content-box">
                                                    <h5 className="title"><Link href="page-project-details">Warehouse On-Hand Inventory <br/>To Minimizes Your Spend!</Link></h5>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="project-block">
                                            <div className="inner-box">
                                                <div className="image-box">
                                                    <figure className="image"><Link href="/images/resource/project-3.jpg" className="lightbox-image"><img src="/images/resource/project-3.jpg" alt=""/></Link></figure>
                                                    <Link href="page-project-details" className="icon"><i className="fa fa-solid fa-arrow-right"></i></Link>
                                                </div>
                                                <div className="content-box">
                                                    <h5 className="title"><Link href="page-project-details">Warehouse On-Hand Inventory <br/>To Minimizes Your Spend!</Link></h5>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="project-block">
                                            <div className="inner-box">
                                                <div className="image-box">
                                                    <figure className="image"><Link href="/images/resource/project-3.jpg" className="lightbox-image"><img src="/images/resource/project-3.jpg" alt=""/></Link></figure>
                                                    <Link href="page-project-details" className="icon"><i className="fa fa-solid fa-arrow-right"></i></Link>
                                                </div>
                                                <div className="content-box">
                                                    <h5 className="title"><Link href="page-project-details">Warehouse On-Hand Inventory <br/>To Minimizes Your Spend!</Link></h5>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="project-block">
                                            <div className="inner-box">
                                                <div className="image-box">
                                                    <figure className="image"><Link href="/images/resource/project-1.jpg" className="lightbox-image"><img src="/images/resource/project-1.jpg" alt=""/></Link></figure>
                                                    <Link href="page-project-details" className="icon"><i className="fa fa-solid fa-arrow-right"></i></Link>
                                                </div>
                                                <div className="content-box">
                                                    <h5 className="title"><Link href="page-project-details">Warehouse On-Hand Inventory <br/>To Minimizes Your Spend!</Link></h5>
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
export default Projects3