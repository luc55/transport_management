import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
const swiperOptions = {
        modules: [Autoplay, Pagination, Navigation],
        slidesPerView: 4,
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
                slidesPerView: 4,
                // spaceBetween: 30,
            },
            1350: {
                slidesPerView: 4,
                // spaceBetween: 30,
            },
        }

        
    };
const ProjectGrid = () => {
    return (
        <>
        <section className="project-section">
            <div className="auto-container">
    
                <div className="carousel-outer style-two">
                    <div className="swiper project-slider">
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
        </section>
        </>
    );
};
export default ProjectGrid