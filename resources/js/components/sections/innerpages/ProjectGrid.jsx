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
                        <div className="title-box">
                            <h2>Agence MAROC</h2>
                        </div>

                        <Swiper {...swiperOptions}>
                            <SwiperSlide>
                                <div className="project-block">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><Link href="/images/agences/4.png" className="lightbox-image"><img src="/images/agences/2.png" alt=""/></Link></figure>
                                            <Link href="page-project-details" className="icon"><i className="fa fa-solid fa-arrow-right"></i></Link>
                                        </div>
                                        <div className="content-box">
                                            <h5 className="title"><Link href="page-project-details">NADOR</Link></h5>
                                            <p className="address"><i className="icon fa fa-map-marker-alt"></i> BOULEVARD SAKIA EL HAMRA EN FACE PARAMASSIN</p>
                                            <p className="phone"><i className="icon fa fa-phone"></i> 06 30 00 01 32 / 06 81 15 84 81</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="project-block">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><Link href="/images/agences/15.png" className="lightbox-image"><img src="/images/agences/15.png" alt=""/></Link></figure>
                                            <Link href="page-project-details" className="icon"><i className="fa fa-solid fa-arrow-right"></i></Link>
                                        </div>
                                        <div className="content-box">
                                            <h5 className="title"><Link href="page-project-details">AL HOUCEIMA <br/>  </Link></h5>
                                            <p className="address"><i className="icon fa fa-map-marker-alt"></i> HAY MOURIBIKHOU RUE ALORDOUN COTE SOUK TLAT LAKDIM</p>
                                            <p className="phone"><i className="icon fa fa-phone"></i> 05 39 98 53 58 / 06 14 39 20 21</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="project-block">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><Link href="/images/agences/16.png" className="lightbox-image"><img src="/images/agences/16.png" alt=""/></Link></figure>
                                            <Link href="page-project-details" className="icon"><i className="fa fa-solid fa-arrow-right"></i></Link>
                                        </div>
                                        <div className="content-box">
                                            <h5 className="title"><Link href="page-project-details">Berkane </Link></h5>
                                            <p className="address"><i className="icon fa fa-map-marker-alt"></i> 105 RUE CHAOUI TOURIA HAY EL HASSANI</p>
                                            <p className="phone"><i className="icon fa fa-phone"></i> 05 36 61 33 97 / 06 48 29 89 00</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="project-block">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><Link href="/images/agences/17.png" className="lightbox-image"><img src="/images/agences/17.png" alt=""/></Link></figure>
                                            <Link href="page-project-details" className="icon"><i className="fa fa-solid fa-arrow-right"></i></Link>
                                        </div>
                                        <div className="content-box">
                                            <h5 className="title"><Link href="page-project-details">Ahfir </Link></h5>
                                            <p className="address"><i className="icon fa fa-map-marker-alt"></i> N23 AVENUE OUJDA</p>
                                            <p className="phone"><i className="icon fa fa-phone"></i> 06 30 87 73 25 / 06 71 84 37 07</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="project-block">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><Link href="/images/agences/8.png" className="lightbox-image"><img src="/images/agences/8.png" alt=""/></Link></figure>
                                            <Link href="page-project-details" className="icon"><i className="fa fa-solid fa-arrow-right"></i></Link>
                                        </div>
                                        <div className="content-box">
                                            <h5 className="title"><Link href="page-project-details">TANGER </Link></h5>
                                            <p className="address"><i className="icon fa fa-map-marker-alt"></i> 9 RUE ABI LKACEM ETTADILI RDC CHARF</p>
                                            <p className="phone"><i className="icon fa fa-phone"></i> 06 62 85 40 85 / 06 19 01 30 75</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="project-block">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><Link href="/images/resource/project-1.png" className="lightbox-image"><img src="/images/agences/2.png" alt=""/></Link></figure>
                                            <Link href="page-project-details" className="icon"><i className="fa fa-solid fa-arrow-right"></i></Link>
                                        </div>
                                        <div className="content-box">
                                            <h5 className="title"><Link href="page-project-details">CASA </Link></h5>
                                            <p className="address"><i className="icon fa fa-map-marker-alt"></i> ROUTE DE MEDIOUNA LOTISSEMENT MERBOUHA RUE 8 N72 AIN CHOUK</p>
                                            <p className="phone"><i className="icon fa fa-phone"></i> 05 22 21 80 29 / 06 66 75 69 82</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="project-block">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><Link href="/images/resource/project-1.png" className="lightbox-image"><img src="/images/agences/13.png" alt=""/></Link></figure>
                                            <Link href="page-project-details" className="icon"><i className="fa fa-solid fa-arrow-right"></i></Link>
                                        </div>
                                        <div className="content-box">
                                            <h5 className="title"><Link href="page-project-details">BENI MELLAL </Link></h5>
                                            <p className="address"><i className="icon fa fa-map-marker-alt"></i> HAY EL MORABITINE RUE DIMACHQ N38</p>
                                            <p className="phone"><i className="icon fa fa-phone"></i> 05 23 48 62 49 / 06 69 13 99 14</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="project-block">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><Link href="/images/resource/project-1.png" className="lightbox-image"><img src="/images/agences/15.png" alt=""/></Link></figure>
                                            <Link href="page-project-details" className="icon"><i className="fa fa-solid fa-arrow-right"></i></Link>
                                        </div>
                                        <div className="content-box">
                                            <h5 className="title"><Link href="page-project-details">TETOUAN </Link></h5>
                                            <p className="address"><i className="icon fa fa-map-marker-alt"></i> 139 RUE BOUJDOR EL MHENECH 2 BEN MCHICHE</p>
                                            <p className="phone"><i className="icon fa fa-phone"></i> 06 60 50 30 80</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="project-block">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><Link href="/images/resource/project-1.png" className="lightbox-image"><img src="/images/agences/19.png" alt=""/></Link></figure>
                                            <Link href="page-project-details" className="icon"><i className="fa fa-solid fa-arrow-right"></i></Link>
                                        </div>
                                        <div className="content-box">
                                            <h5 className="title"><Link href="page-project-details">MOHAMMADIA</Link></h5>
                                            <p className="address"><i className="icon fa fa-map-marker-alt"></i> HAY ERRACHIDIA 1 N 40 EL ALIA</p>
                                            <p className="phone"><i className="icon fa fa-phone"></i> 07 67 07 55 25</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="project-block">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><Link href="/images/agences/5.png" className="lightbox-image"><img src="/images/agences/5.png" alt=""/></Link></figure>
                                            <Link href="page-project-details" className="icon"><i className="fa fa-solid fa-arrow-right"></i></Link>
                                        </div>
                                        <div className="content-box">
                                            <h5 className="title"><Link href="page-project-details">OUJDA</Link></h5>
                                            <p className="address"><i className="icon fa fa-map-marker-alt"></i> 3 RUE TLEMCEN</p>
                                            <p className="phone"><i className="icon fa fa-phone"></i> 06 70 86 12 40 / 06 90 00 09 25</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="project-block">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><Link href="/images/resource/project-1.png" className="lightbox-image"><img src="/images/agences/10.png" alt=""/></Link></figure>
                                            <Link href="page-project-details" className="icon"><i className="fa fa-solid fa-arrow-right"></i></Link>
                                        </div>
                                        <div className="content-box">
                                            <h5 className="title"><Link href="page-project-details">FES</Link></h5>
                                            <p className="address"><i className="icon fa fa-map-marker-alt"></i> 103 LOT RIYAD YASSMIN ROUTE AIN CHKEF IMB 3 MAG 5</p>
                                            <p className="phone"><i className="icon fa fa-phone"></i> 06 41 39 34 395</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="project-block">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><Link href="/images/resource/project-1.png" className="lightbox-image"><img src="/images/agences/14.png" alt=""/></Link></figure>
                                            <Link href="page-project-details" className="icon"><i className="fa fa-solid fa-arrow-right"></i></Link>
                                        </div>
                                        <div className="content-box">
                                            <h5 className="title"><Link href="page-project-details">KENITRA</Link></h5>
                                            <p className="address"><i className="icon fa fa-map-marker-alt"></i> Av. BACHA ABDELHAMID ELALAOUIN388 RUE 153 AFCA A COTE DE BIN MARJANE</p>
                                            <p className="phone"><i className="icon fa fa-phone"></i> 05 38 99 80 84 / 07 05 05 42 22</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="project-block">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><Link href="/images/agences/9.png" className="lightbox-image"><img src="/images/agences/9.png" alt=""/></Link></figure>
                                            <Link href="page-project-details" className="icon"><i className="fa fa-solid fa-arrow-right"></i></Link>
                                        </div>
                                        <div className="content-box">
                                            <h5 className="title"><Link href="page-project-details">EL JADIDA</Link></h5>
                                            <p className="address"><i className="icon fa fa-map-marker-alt"></i> N2 AVENUE HASSAN 2 MEN FACE CREDIT AGRICOLE</p>
                                            <p className="phone"><i className="icon fa fa-phone"></i> 06 70 94 41 33</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="project-block">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><Link href="/images/resource/project-1.png" className="lightbox-image"><img src="/images/agences/21.png" alt=""/></Link></figure>
                                            <Link href="page-project-details" className="icon"><i className="fa fa-solid fa-arrow-right"></i></Link>
                                        </div>
                                        <div className="content-box">
                                            <h5 className="title"><Link href="page-project-details">KHOURIBGA</Link></h5>
                                            <p className="address"><i className="icon fa fa-map-marker-alt"></i> 6 RUE MOHAMET V Près de Gril Yassine</p>
                                            <p className="phone"><i className="icon fa fa-phone"></i> 06 94 45 66 85 / 07 00 17 71 71</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="project-block">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><Link href="/images/resource/project-1.png" className="lightbox-image"><img src="/images/agences/23.jpg" alt=""/></Link></figure>
                                            <Link href="page-project-details" className="icon"><i className="fa fa-solid fa-arrow-right"></i></Link>
                                        </div>
                                        <div className="content-box">
                                            <h5 className="title"><Link href="page-project-details">KHEMISSAT</Link></h5>
                                            <p className="address"><i className="icon fa fa-map-marker-alt"></i></p>
                                            <p className="phone"><i className="icon fa fa-phone"></i></p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="project-block">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><Link href="/images/agences/3.png" className="lightbox-image"><img src="/images/agences/3.png" alt=""/></Link></figure>
                                            <Link href="page-project-details" className="icon"><i className="fa fa-solid fa-arrow-right"></i></Link>
                                        </div>
                                        <div className="content-box">
                                            <h5 className="title"><Link href="page-project-details">TAZA</Link></h5>
                                            <p className="address"><i className="icon fa fa-map-marker-alt"></i> COMPLEXE COMMERCIAL BIR ANZARAN N10 ROUTE MARJANE GARE</p>
                                            <p className="phone"><i className="icon fa fa-phone"></i></p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="project-block">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><Link href="/images/resource/project-1.png" className="lightbox-image"><img src="/images/agences/11.png" alt=""/></Link></figure>
                                            <Link href="page-project-details" className="icon"><i className="fa fa-solid fa-arrow-right"></i></Link>
                                        </div>
                                        <div className="content-box">
                                            <h5 className="title"><Link href="page-project-details">MARRAKECH</Link></h5>
                                            <p className="address"><i className="icon fa fa-map-marker-alt"></i> RESIDENCE SALMA IMMEUBLE 12 RTE ESSAOUIRA AGADIR GUÉLIZ</p>
                                            <p className="phone"><i className="icon fa fa-phone"></i> 06 53 91 72 48</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="project-block">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><Link href="/images/agences/24.png" className="lightbox-image"><img src="/images/agences/24.png" alt=""/></Link></figure>
                                            <Link href="page-project-details" className="icon"><i className="fa fa-solid fa-arrow-right"></i></Link>
                                        </div>
                                        <div className="content-box">
                                            <h5 className="title"><Link href="page-project-details">GUERCIF</Link></h5>
                                            <p className="address"><i className="icon fa fa-map-marker-alt"></i> BLD ABDELMOUMEN BEN ALI LOTISSEMENT DIDI COTE SALLE DE MUSCULATION</p>
                                            <p className="phone"><i className="icon fa fa-phone"></i> 06 09 58 46 19</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="project-block">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><Link href="/images/agences/6.png" className="lightbox-image"><img src="/images/agences/3.png" alt=""/></Link></figure>
                                            <Link href="page-project-details" className="icon"><i className="fa fa-solid fa-arrow-right"></i></Link>
                                        </div>
                                        <div className="content-box">
                                            <h5 className="title"><Link href="page-project-details">IMZOUREN</Link></h5>
                                            <p className="address"><i className="icon fa fa-map-marker-alt"></i> RUE 21 N13 HAY ATIJARI</p>
                                            <p className="phone"><i className="icon fa fa-phone"></i> 05 39 80 56 90 / 06 45 49 97 98</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="project-block">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><Link href="/images/agences/2.png" className="lightbox-image"><img src="/images/agences/2.png" alt=""/></Link></figure>
                                            <Link href="page-project-details" className="icon"><i className="fa fa-solid fa-arrow-right"></i></Link>
                                        </div>
                                        <div className="content-box">
                                            <h5 className="title"><Link href="page-project-details">MEKNES</Link></h5>
                                            <p className="address"><i className="icon fa fa-map-marker-alt"></i> HAY NAAIM IMM ELBOUCHIKΗΙ à côté de Damane CASH</p>
                                            <p className="phone"><i className="icon fa fa-phone"></i> 07 12 12 30 66</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="project-block">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><Link href="/images/agences/18.png" className="lightbox-image"><img src="/images/agences/18.png" alt=""/></Link></figure>
                                            <Link href="page-project-details" className="icon"><i className="fa fa-solid fa-arrow-right"></i></Link>
                                        </div>
                                        <div className="content-box">
                                            <h5 className="title"><Link href="page-project-details">RABAT</Link></h5>
                                            <p className="address"><i className="icon fa fa-map-marker-alt"></i> AMAL 5 N286 ALMASSIRA HAY YAAKOUB AL MANSOUR</p>
                                            <p className="phone"><i className="icon fa fa-phone"></i> 07 06 82 65 99</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="project-block">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><Link href="/images/agences/20.png" className="lightbox-image"><img src="/images/agences/20.png" alt=""/></Link></figure>
                                            <Link href="page-project-details" className="icon"><i className="fa fa-solid fa-arrow-right"></i></Link>
                                        </div>
                                        <div className="content-box">
                                            <h5 className="title"><Link href="page-project-details">SAFI</Link></h5>
                                            <p className="address"><i className="icon fa fa-map-marker-alt"></i> N85 RUE MOULAY EL HASSAN HAY JARIFAT EN FACE MOSQUEE EL MASKI</p>
                                            <p className="phone"><i className="icon fa fa-phone"></i> 07 63 32 55 13</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="project-block">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><Link href="/images/resource/project-1.png" className="lightbox-image"><img src="/images/agences/11.png" alt=""/></Link></figure>
                                            <Link href="page-project-details" className="icon"><i className="fa fa-solid fa-arrow-right"></i></Link>
                                        </div>
                                        <div className="content-box">
                                            <h5 className="title"><Link href="page-project-details">AGADIR</Link></h5>
                                            <p className="address"><i className="icon fa fa-map-marker-alt"></i> HAY ZAYTOUNE BLOC A N103 TIKIOUINE</p>
                                            <p className="phone"><i className="icon fa fa-phone"></i> 06 52 72 69 11</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="project-block">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><Link href="/images/agences/25.png" className="lightbox-image"><img src="/images/agences/25.png" alt=""/></Link></figure>
                                            <Link href="page-project-details" className="icon"><i className="fa fa-solid fa-arrow-right"></i></Link>
                                        </div>
                                        <div className="content-box">
                                            <h5 className="title"><Link href="page-project-details">TAOURIRT</Link></h5>
                                            <p className="address"><i className="icon fa fa-map-marker-alt"></i> BD MOUKAWAMA HAY JDIDI N°20</p>
                                            <p className="phone"><i className="icon fa fa-phone"></i> 07 66 07 02 76</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="project-block">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><Link href="/images/agences/28.png" className="lightbox-image"><img src="/images/agences/28.png" alt=""/></Link></figure>
                                            <Link href="page-project-details" className="icon"><i className="fa fa-solid fa-arrow-right"></i></Link>
                                        </div>
                                        <div className="content-box">
                                            <h5 className="title"><Link href="page-project-details">SALE</Link></h5>
                                            <p className="address"><i className="icon fa fa-map-marker-alt"></i> LOT BAYTI SAKAN N 324
                                            AMER IMB35 MAGASIN 35 EN FACE DEPOT BUS SALÉ</p>
                                            <p className="phone"><i className="icon fa fa-phone"></i> 07 01 46 06 06 / 06 01 00 95 55</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="project-block">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><Link href="/images/agences/26.png" className="lightbox-image"><img src="/images/agences/26.png" alt=""/></Link></figure>
                                            <Link href="page-project-details" className="icon"><i className="fa fa-solid fa-arrow-right"></i></Link>
                                        </div>
                                        <div className="content-box">
                                            <h5 className="title"><Link href="page-project-details">Tinghir</Link></h5>
                                            <p className="address"><i className="icon fa fa-map-marker-alt"></i> N324 Avenue Mohamed 5 à côté café Janat</p>
                                            <p className="phone"><i className="icon fa fa-phone"></i> 07 63 32 55 16</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="project-block">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><Link href="/images/agences/27.png" className="lightbox-image"><img src="/images/agences/27.png" alt=""/></Link></figure>
                                            <Link href="page-project-details" className="icon"><i className="fa fa-solid fa-arrow-right"></i></Link>
                                        </div>
                                        <div className="content-box">
                                            <h5 className="title"><Link href="page-project-details">FKIH BEN SALH</Link></h5>
                                            <p className="address"><i className="icon fa fa-map-marker-alt"></i> BOULEVARD HASSAN 2 N 14 GARE ROUTIERE</p>
                                            <p className="phone"><i className="icon fa fa-phone"></i> 06 71 76 01 13</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>

                <div className="carousel-outer style-two">
                    <div className="swiper project-slider">
                        <div className="title-box">
                            <h2>Agence FRANCE</h2>
                        </div>
                        <Swiper {...swiperOptions}>
                            <SwiperSlide>
                                <div className="project-block">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><Link href="/images/resource/project-1.png" className="lightbox-image"><img src="/images/resource/project-1.png" alt=""/></Link></figure>
                                            <Link href="page-project-details" className="icon"><i className="fa fa-solid fa-arrow-right"></i></Link>
                                        </div>
                                        <div className="content-box">
                                            <h5 className="title"><Link href="page-project-details">NADOR</Link></h5>
                                            <p className="address"><i className="icon fa fa-map-marker-alt"></i> BOULEVARD SAKIA EL HAMRA EN FACE PARAMASSIN</p>
                                            <p className="phone"><i className="icon fa fa-phone"></i> 06 30 00 01 32 / 06 81 15 84 81</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="project-block">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><Link href="/images/resource/project-2.png" className="lightbox-image"><img src="/images/resource/project-2.png" alt=""/></Link></figure>
                                            <Link href="page-project-details" className="icon"><i className="fa fa-solid fa-arrow-right"></i></Link>
                                        </div>
                                        <div className="content-box">
                                            <h5 className="title"><Link href="page-project-details">AL HOUCEIMA <br/>  </Link></h5>
                                            <p className="address"><i className="icon fa fa-map-marker-alt"></i> HAY MOURIBIKHOU RUE ALORDOUN COTE SOUK TLAT LAKDIM</p>
                                            <p className="phone"><i className="icon fa fa-phone"></i> 05 39 98 53 58 / 06 14 39 20 21</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="project-block">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><Link href="/images/resource/project-3.png" className="lightbox-image"><img src="/images/resource/project-3.png" alt=""/></Link></figure>
                                            <Link href="page-project-details" className="icon"><i className="fa fa-solid fa-arrow-right"></i></Link>
                                        </div>
                                        <div className="content-box">
                                            <h5 className="title"><Link href="page-project-details">Berkane </Link></h5>
                                            <p className="address"><i className="icon fa fa-map-marker-alt"></i> 105 RUE CHAOUI TOURIA HAY EL HASSANI</p>
                                            <p className="phone"><i className="icon fa fa-phone"></i> 05 36 61 33 97 / 06 48 29 89 00</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="project-block">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><Link href="/images/resource/project-3.png" className="lightbox-image"><img src="/images/resource/project-3.png" alt=""/></Link></figure>
                                            <Link href="page-project-details" className="icon"><i className="fa fa-solid fa-arrow-right"></i></Link>
                                        </div>
                                        <div className="content-box">
                                            <h5 className="title"><Link href="page-project-details">Ahfir </Link></h5>
                                            <p className="address"><i className="icon fa fa-map-marker-alt"></i> N23 AVENUE OUJDA</p>
                                            <p className="phone"><i className="icon fa fa-phone"></i> 06 30 87 73 25 / 06 71 84 37 07</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="project-block">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><Link href="/images/resource/project-1.png" className="lightbox-image"><img src="/images/resource/project-1.png" alt=""/></Link></figure>
                                            <Link href="page-project-details" className="icon"><i className="fa fa-solid fa-arrow-right"></i></Link>
                                        </div>
                                        <div className="content-box">
                                            <h5 className="title"><Link href="page-project-details">TANGER </Link></h5>
                                            <p className="address"><i className="icon fa fa-map-marker-alt"></i> 9 RUE ABI LKACEM ETTADILI RDC CHARF</p>
                                            <p className="phone"><i className="icon fa fa-phone"></i> 06 62 85 40 85 / 06 19 01 30 75</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="project-block">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><Link href="/images/resource/project-1.png" className="lightbox-image"><img src="/images/resource/project-1.png" alt=""/></Link></figure>
                                            <Link href="page-project-details" className="icon"><i className="fa fa-solid fa-arrow-right"></i></Link>
                                        </div>
                                        <div className="content-box">
                                            <h5 className="title"><Link href="page-project-details">CASA </Link></h5>
                                            <p className="address"><i className="icon fa fa-map-marker-alt"></i> ROUTE DE MEDIOUNA LOTISSEMENT MERBOUHA RUE 8 N72 AIN CHOUK</p>
                                            <p className="phone"><i className="icon fa fa-phone"></i> 05 22 21 80 29 / 06 66 75 69 82</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="project-block">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><Link href="/images/agences/12.png" className="lightbox-image"><img src="/images/resource/project-1.png" alt=""/></Link></figure>
                                            <Link href="page-project-details" className="icon"><i className="fa fa-solid fa-arrow-right"></i></Link>
                                        </div>
                                        <div className="content-box">
                                            <h5 className="title"><Link href="page-project-details">BENI MELLAL </Link></h5>
                                            <p className="address"><i className="icon fa fa-map-marker-alt"></i> HAY EL MORABITINE RUE DIMACHQ N38</p>
                                            <p className="phone"><i className="icon fa fa-phone"></i> 05 23 48 62 49 / 06 69 13 99 14</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="project-block">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><Link href="/images/agences/7.png" className="lightbox-image"><img src="/images/resource/project-1.png" alt=""/></Link></figure>
                                            <Link href="page-project-details" className="icon"><i className="fa fa-solid fa-arrow-right"></i></Link>
                                        </div>
                                        <div className="content-box">
                                            <h5 className="title"><Link href="page-project-details">TETOUAN </Link></h5>
                                            <p className="address"><i className="icon fa fa-map-marker-alt"></i> 139 RUE BOUJDOR EL MHENECH 2 BEN MCHICHE</p>
                                            <p className="phone"><i className="icon fa fa-phone"></i> 06 60 50 30 80</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="project-block">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><Link href="/images/resource/project-1.png" className="lightbox-image"><img src="/images/resource/project-1.png" alt=""/></Link></figure>
                                            <Link href="page-project-details" className="icon"><i className="fa fa-solid fa-arrow-right"></i></Link>
                                        </div>
                                        <div className="content-box">
                                            <h5 className="title"><Link href="page-project-details">MOHAMMADIA</Link></h5>
                                            <p className="address"><i className="icon fa fa-map-marker-alt"></i> HAY ERRACHIDIA 1 N 40 EL ALIA</p>
                                            <p className="phone"><i className="icon fa fa-phone"></i> 07 67 07 55 25</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="project-block">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><Link href="/images/resource/project-1.png" className="lightbox-image"><img src="/images/resource/project-1.png" alt=""/></Link></figure>
                                            <Link href="page-project-details" className="icon"><i className="fa fa-solid fa-arrow-right"></i></Link>
                                        </div>
                                        <div className="content-box">
                                            <h5 className="title"><Link href="page-project-details">OUJDA</Link></h5>
                                            <p className="address"><i className="icon fa fa-map-marker-alt"></i> 3 RUE TLEMCEN</p>
                                            <p className="phone"><i className="icon fa fa-phone"></i> 06 70 86 12 40 / 06 90 00 09 25</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="project-block">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><Link href="/images/agences/10.png" className="lightbox-image"><img src="/images/resource/project-1.png" alt=""/></Link></figure>
                                            <Link href="page-project-details" className="icon"><i className="fa fa-solid fa-arrow-right"></i></Link>
                                        </div>
                                        <div className="content-box">
                                            <h5 className="title"><Link href="page-project-details">FES</Link></h5>
                                            <p className="address"><i className="icon fa fa-map-marker-alt"></i> 103 LOT RIYAD YASSMIN ROUTE AIN CHKEF IMB 3 MAG 5</p>
                                            <p className="phone"><i className="icon fa fa-phone"></i> 06 41 39 34 395</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="project-block">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><Link href="/images/agences/14.png" className="lightbox-image"><img src="/images/agences/14.png"alt=""/></Link></figure>
                                            <Link href="page-project-details" className="icon"><i className="fa fa-solid fa-arrow-right"></i></Link>
                                        </div>
                                        <div className="content-box">
                                            <h5 className="title"><Link href="page-project-details">KENITRA</Link></h5>
                                            <p className="address"><i className="icon fa fa-map-marker-alt"></i> Av. BACHA ABDELHAMID ELALAOUIN388 RUE 153 AFCA A COTE DE BIN MARJANE</p>
                                            <p className="phone"><i className="icon fa fa-phone"></i> 05 38 99 80 84 / 07 05 05 42 22</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="project-block">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><Link href="/images/resource/project-1.png" className="lightbox-image"><img src="/images/resource/project-1.png" alt=""/></Link></figure>
                                            <Link href="page-project-details" className="icon"><i className="fa fa-solid fa-arrow-right"></i></Link>
                                        </div>
                                        <div className="content-box">
                                            <h5 className="title"><Link href="page-project-details">EL JADIDA</Link></h5>
                                            <p className="address"><i className="icon fa fa-map-marker-alt"></i> N2 AVENUE HASSAN 2 MEN FACE CREDIT AGRICOLE</p>
                                            <p className="phone"><i className="icon fa fa-phone"></i> 06 70 94 41 33</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="project-block">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><Link href="/images/agences/21.png" className="lightbox-image"><img src="/images/agences/21.png" alt=""/></Link></figure>
                                            <Link href="page-project-details" className="icon"><i className="fa fa-solid fa-arrow-right"></i></Link>
                                        </div>
                                        <div className="content-box">
                                            <h5 className="title"><Link href="page-project-details">KHOURIBGA</Link></h5>
                                            <p className="address"><i className="icon fa fa-map-marker-alt"></i> 6 RUE MOHAMET V Près de Gril Yassine</p>
                                            <p className="phone"><i className="icon fa fa-phone"></i> 06 94 45 66 85 / 07 00 17 71 71</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="project-block">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><Link href="/images/resource/project-1.png" className="lightbox-image"><img src="/images/resource/project-1.png" alt=""/></Link></figure>
                                            <Link href="page-project-details" className="icon"><i className="fa fa-solid fa-arrow-right"></i></Link>
                                        </div>
                                        <div className="content-box">
                                            <h5 className="title"><Link href="page-project-details">KHEMISSAT</Link></h5>
                                            <p className="address"><i className="icon fa fa-map-marker-alt"></i></p>
                                            <p className="phone"><i className="icon fa fa-phone"></i></p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="project-block">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><Link href="/images/resource/project-1.png" className="lightbox-image"><img src="/images/resource/project-1.png" alt=""/></Link></figure>
                                            <Link href="page-project-details" className="icon"><i className="fa fa-solid fa-arrow-right"></i></Link>
                                        </div>
                                        <div className="content-box">
                                            <h5 className="title"><Link href="page-project-details">TAZA</Link></h5>
                                            <p className="address"><i className="icon fa fa-map-marker-alt"></i> COMPLEXE COMMERCIAL BIR ANZARAN N10 ROUTE MARJANE GARE</p>
                                            <p className="phone"><i className="icon fa fa-phone"></i></p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="project-block">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><Link href="/images/agences/3.jpg" className="lightbox-image"><img src="/images/resource/project-1.png" alt=""/></Link></figure>
                                            <Link href="page-project-details" className="icon"><i className="fa fa-solid fa-arrow-right"></i></Link>
                                        </div>
                                        <div className="content-box">
                                            <h5 className="title"><Link href="page-project-details">MARRAKECH</Link></h5>
                                            <p className="address"><i className="icon fa fa-map-marker-alt"></i> RESIDENCE SALMA IMMEUBLE 12 RTE ESSAOUIRA AGADIR GUÉLIZ</p>
                                            <p className="phone"><i className="icon fa fa-phone"></i> 06 53 91 72 48</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="project-block">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><Link href="/images/resource/project-1.png" className="lightbox-image"><img src="/images/resource/project-1.png" alt=""/></Link></figure>
                                            <Link href="page-project-details" className="icon"><i className="fa fa-solid fa-arrow-right"></i></Link>
                                        </div>
                                        <div className="content-box">
                                            <h5 className="title"><Link href="page-project-details">GUERCIF</Link></h5>
                                            <p className="address"><i className="icon fa fa-map-marker-alt"></i> BLD ABDELMOUMEN BEN ALI LOTISSEMENT DIDI COTE SALLE DE MUSCULATION</p>
                                            <p className="phone"><i className="icon fa fa-phone"></i> 06 09 58 46 19</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="project-block">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><Link href="/images/resource/project-1.png" className="lightbox-image"><img src="/images/resource/project-1.png" alt=""/></Link></figure>
                                            <Link href="page-project-details" className="icon"><i className="fa fa-solid fa-arrow-right"></i></Link>
                                        </div>
                                        <div className="content-box">
                                            <h5 className="title"><Link href="page-project-details">IMZOUREN</Link></h5>
                                            <p className="address"><i className="icon fa fa-map-marker-alt"></i> RUE 21 N13 HAY ATIJARI</p>
                                            <p className="phone"><i className="icon fa fa-phone"></i> 05 39 80 56 90 / 06 45 49 97 98</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="project-block">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><Link href="/images/resource/project-1.png" className="lightbox-image"><img src="/images/resource/project-1.png" alt=""/></Link></figure>
                                            <Link href="page-project-details" className="icon"><i className="fa fa-solid fa-arrow-right"></i></Link>
                                        </div>
                                        <div className="content-box">
                                            <h5 className="title"><Link href="page-project-details">MEKNES</Link></h5>
                                            <p className="address"><i className="icon fa fa-map-marker-alt"></i> HAY NAAIM IMM ELBOUCHIKΗΙ à côté de Damane CASH</p>
                                            <p className="phone"><i className="icon fa fa-phone"></i> 07 12 12 30 66</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="project-block">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><Link href="/images/resource/project-1.png" className="lightbox-image"><img src="/images/resource/project-1.png" alt=""/></Link></figure>
                                            <Link href="page-project-details" className="icon"><i className="fa fa-solid fa-arrow-right"></i></Link>
                                        </div>
                                        <div className="content-box">
                                            <h5 className="title"><Link href="page-project-details">RABAT</Link></h5>
                                            <p className="address"><i className="icon fa fa-map-marker-alt"></i> AMAL 5 N286 ALMASSIRA HAY YAAKOUB AL MANSOUR</p>
                                            <p className="phone"><i className="icon fa fa-phone"></i> 07 06 82 65 99</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="project-block">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><Link href="/images/resource/project-1.png" className="lightbox-image"><img src="/images/resource/project-1.png" alt=""/></Link></figure>
                                            <Link href="page-project-details" className="icon"><i className="fa fa-solid fa-arrow-right"></i></Link>
                                        </div>
                                        <div className="content-box">
                                            <h5 className="title"><Link href="page-project-details">SAFI</Link></h5>
                                            <p className="address"><i className="icon fa fa-map-marker-alt"></i> N85 RUE MOULAY EL HASSAN HAY JARIFAT EN FACE MOSQUEE EL MASKI</p>
                                            <p className="phone"><i className="icon fa fa-phone"></i> 07 63 32 55 13</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="project-block">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><Link href="/images/agences/11.png" className="lightbox-image"><img src="/images/agences/11.png" alt=""/></Link></figure>
                                            <Link href="page-project-details" className="icon"><i className="fa fa-solid fa-arrow-right"></i></Link>
                                        </div>
                                        <div className="content-box">
                                            <h5 className="title"><Link href="page-project-details">AGADIR</Link></h5>
                                            <p className="address"><i className="icon fa fa-map-marker-alt"></i> HAY ZAYTOUNE BLOC A N103 TIKIOUINE</p>
                                            <p className="phone"><i className="icon fa fa-phone"></i> 06 52 72 69 11</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="project-block">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><Link href="/images/resource/project-1.png" className="lightbox-image"><img src="/images/resource/project-1.png" alt=""/></Link></figure>
                                            <Link href="page-project-details" className="icon"><i className="fa fa-solid fa-arrow-right"></i></Link>
                                        </div>
                                        <div className="content-box">
                                            <h5 className="title"><Link href="page-project-details">TAOURIRT</Link></h5>
                                            <p className="address"><i className="icon fa fa-map-marker-alt"></i> BD MOUKAWAMA HAY JDIDI N°20</p>
                                            <p className="phone"><i className="icon fa fa-phone"></i> 07 66 07 02 76</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="project-block">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><Link href="/images/resource/project-1.png" className="lightbox-image"><img src="/images/resource/project-1.png" alt=""/></Link></figure>
                                            <Link href="page-project-details" className="icon"><i className="fa fa-solid fa-arrow-right"></i></Link>
                                        </div>
                                        <div className="content-box">
                                            <h5 className="title"><Link href="page-project-details">SALE</Link></h5>
                                            <p className="address"><i className="icon fa fa-map-marker-alt"></i> LOT BAYTI SAKAN N 324
                                            AMER IMB35 MAGASIN 35 EN FACE DEPOT BUS SALÉ</p>
                                            <p className="phone"><i className="icon fa fa-phone"></i> 07 01 46 06 06 / 06 01 00 95 55</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="project-block">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><Link href="/images/resource/project-1.png" className="lightbox-image"><img src="/images/resource/project-1.png" alt=""/></Link></figure>
                                            <Link href="page-project-details" className="icon"><i className="fa fa-solid fa-arrow-right"></i></Link>
                                        </div>
                                        <div className="content-box">
                                            <h5 className="title"><Link href="page-project-details">Tinghir</Link></h5>
                                            <p className="address"><i className="icon fa fa-map-marker-alt"></i> N324 Avenue Mohamed 5 à côté café Janat</p>
                                            <p className="phone"><i className="icon fa fa-phone"></i> 07 63 32 55 16</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="project-block">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><Link href="/images/agences/27.png" className="lightbox-image"><img src="/images/resource/project-1.png" alt=""/></Link></figure>
                                            <Link href="page-project-details" className="icon"><i className="fa fa-solid fa-arrow-right"></i></Link>
                                        </div>
                                        <div className="content-box">
                                            <h5 className="title"><Link href="page-project-details">FKIH BEN SALH</Link></h5>
                                            <p className="address"><i className="icon fa fa-map-marker-alt"></i> BOULEVARD HASSAN 2 N 14 GARE ROUTIERE</p>
                                            <p className="phone"><i className="icon fa fa-phone"></i> 06 71 76 01 13</p>
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


