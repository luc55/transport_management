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
const News2 = () => {
    return (
        <>
        <section className="news-section-two">
            <div className="auto-container">
                <div className="row">
    
                    <div className="sec-title col-xl-4 wow fadeInUp">
                        <span className="sub-title">Blog Posts</span>
                        <h2>Get Every Tips <br/> & Updates</h2>
                        <div className="text">Trusted by the world’s best organizations, for 15 years and running, it has been delivering smiles to hundreds of IT advisors, developers...</div>
                        <Link href="page-about" className="theme-btn btn-style-one"><i className="icon fa fas fa-plus"></i><span className="btn-title">View All Posts</span></Link>
                    </div>
                    
                    <div className="carousel-outer col-xl-8 wow fadeInUp">
                        <div className="swiper news-two-slider">
                            <div className="swiper-wrapper">
                                <Swiper {...swiperOptions}>
                                    <SwiperSlide>
                                        <div className="news-block">
                                            <div className="inner-box">
                                                <div className="image-box">
                                                    <figure className="image"><Link href="news-details"><img src="/images/resource/news-5.jpg" alt=""/></Link></figure>
                                                </div>
                                                <div className="content-box">
                                                    <ul className="post-info">
                                                        <li><i className="fa fa-user-circle"></i> Sowat A</li>
                                                        <li><i className="fa fa-comments"></i> 256 Comments</li>
                                                    </ul>
                                                    <h4 className="title"><Link href="news-details">Transforming Transparency & Trust in Supply Chains</Link></h4>
                                                    <Link href="news-details" className="read-more">Read More <i className="fa fa-solid fa-arrow-right"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="news-block">
                                            <div className="inner-box">
                                                <div className="image-box">
                                                    <figure className="image"><Link href="news-details"><img src="/images/resource/news-4.jpg" alt=""/></Link></figure>
                                                </div>
                                                <div className="content-box">
                                                    <ul className="post-info">
                                                        <li><i className="fa fa-user-circle"></i> Sowat A</li>
                                                        <li><i className="fa fa-comments"></i> 256 Comments</li>
                                                    </ul>
                                                    <h4 className="title"><Link href="news-details">How Sustainable Practices Are Reshaping the...</Link></h4>
                                                    <Link href="news-details" className="read-more">Read More <i className="fa fa-solid fa-arrow-right"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="news-block">
                                            <div className="inner-box">
                                                <div className="image-box">
                                                    <figure className="image"><Link href="news-details"><img src="/images/resource/news-5.jpg" alt=""/></Link></figure>
                                                </div>
                                                <div className="content-box">
                                                    <ul className="post-info">
                                                        <li><i className="fa fa-user-circle"></i> Sowat A</li>
                                                        <li><i className="fa fa-comments"></i> 256 Comments</li>
                                                    </ul>
                                                    <h4 className="title"><Link href="news-details">Transforming Transparency & Trust in Supply Chains</Link></h4>
                                                    <Link href="news-details" className="read-more">Read More <i className="fa fa-solid fa-arrow-right"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};
export default News2