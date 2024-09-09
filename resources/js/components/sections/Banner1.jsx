import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation, Pagination } from "swiper/modules";
const swiperOptions = {
        modules: [EffectFade, Autoplay, Pagination, Navigation],
        slidesPerView: 1,
        navigation: true,
        effect: 'fade',
        autoplay: {
            delay: 8500,
            disableOnInteraction: false,
        },
        loop: true
    };
const Banner1 = () => {
    return (
        <>
        <section className="banner-section-one">

                <Swiper {...swiperOptions} className="banner-carousel owl-carousel owl-theme">
                    <SwiperSlide>
                    <div className="slide-item">
                        <div className="bg-image" style={{ backgroundImage: 'url(images/main-slider/1.jpg)' }}></div>
                        <div className="auto-container">
                            <div className="content-box">
                                <h2 className="sub-title animate-1"><span>SAHRAOUI</span></h2>
                                <h1 className="title animate-2"><span>Solutions de Fret</span>.</h1>
                                <div className="text animate-3">Les services logistiques jouent un rôle essentiel en garantissant le flux fluide et efficace <br/> des biens et services des fournisseurs vers les clients.</div>
                                <div className="btn-box animate-4">
                                    <Link href="page-about" className="theme-btn btn-style-one"><i className="icon fa fas fa-plus"></i><span className="btn-title">Get a Quote</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>

                    <SwiperSlide>
                    <div className="slide-item">
                        <div className="bg-image" style={{ backgroundImage: 'url(images/main-slider/2.jpg)' }}></div>
                        <div className="auto-container">
                            <div className="content-box">
                                <h2 className="sub-title animate-1"><span>SAHRAOUI</span></h2>
                                <h1 className="title animate-2"><span>Transport</span>.</h1>
                                <div className="text animate-3">
                                Le transport est un composant crucial des échanges internationaux, <br/> facilitant la circulation des marchandises entre les pays. </div>
                                <div className="btn-box animate-4">
                                    <Link href="page-about" className="theme-btn btn-style-one"><i className="icon fa fas fa-plus"></i><span className="btn-title">Get a Quote</span></Link>
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
export default Banner1