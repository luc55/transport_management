import React, { Suspense, lazy } from 'react';
const CounterUp = lazy(() => import('../../components/elements/CounterUp'), {
    ssr: false,
})
const Funfact1 = () => {
    return (
        <>
        <section className="fun-fact-section">
            <div className="outer-box">
                <div className="anim-icons full-width">
                    <span className="icon shape-3"></span>
                    <span className="icon shape-4"></span>
                </div>
                <div className="auto-container">
                    <div className="fun-fact-box">
                        <div className="fact-counter">
                            <div className="row">
    
                                <div className="counter-block col-xxl-3 col-xl-6 col-md-6 col-sm-12 wow fadeInUp">
                                    <div className="inner justify-content-xxl-start justify-content-center">
                                        <div className="icon-box">
                                            <i className="icon flaticon-delivery-box-4"></i>
                                        </div>
                                        <div className="content-box">
                                            <div className="count-box"><CounterUp count={20869} time={3} />
                                            </div>
                                            <h6 className="counter-title">Successfully delivery</h6>
                                        </div>
                                    </div>
                                </div>
    
                                <div className="counter-block col-xxl-3 col-xl-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                                    <div className="inner justify-content-center">
                                        <div className="icon-box">
                                            <i className="icon flaticon-container-2"></i>
                                        </div>
                                        <div className="content-box">
                                            <div className="count-box"><CounterUp count={20869} time={3} /></div>
                                            <h6 className="counter-title">Supply Engineers</h6>
                                        </div>
                                    </div>
                                </div>
    
                                <div className="counter-block col-xxl-3 col-xl-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                                    <div className="inner justify-content-center">
                                        <div className="icon-box">
                                            <i className="icon flaticon-logistics-delivery-6"></i>
                                        </div>
                                        <div className="content-box">
                                            <div className="count-box"><CounterUp count={145} time={3} />
                                            </div>
                                            <h6 className="counter-title">Countries Covered</h6>
                                        </div>
                                    </div>
                                </div>
    
                                <div className="counter-block col-xxl-3 col-xl-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="900ms">
                                    <div className="inner justify-content-xxl-end justify-content-center">
                                        <div className="icon-box">
                                            <i className="icon flaticon-stock-1"></i>
                                        </div>
                                        <div className="content-box">
                                            <div className="count-box"><CounterUp count={1200} time={3} /></div>
                                            <h6 className="counter-title">Companies We Help</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
    
                    <div className="services-box">
                        <div className="row align-items-center">
    
                            <div className="content-column col-lg-7 col-md-12 order-2 wow fadeInUp" data-wow-delay="300ms">
                                <div className="inner-column">
                                    <div className="sec-title light">
                                        <span className="sub-title">Digital Freight That Saves Your Time!</span>
                                        <h2>Our Main Business Goals</h2>
                                    </div>
    
                                    <div className="text2">We pride ourselves on providing the best transport and shipping services available allover the world. Our skilled personnel, utilising communications, tracking and processing software, combined with decades of experience! Through integrated supply chain solutions, Equita drives sustainable competitive advantages.</div>
    
                                    <div className="text">Our skilled personnel, utilising the latest communications, tracking and processing software, combined with decades of experience! Through integrated supply chain solutions.</div>
    
                                    <ul className="list-style-two">
                                        <li>100% Satisfaction Guarantee, Accurate Testing Processes.</li>
                                        <li>Highly Professional Staff, Professional and Qualified.</li>
                                    </ul>
    
                                    <a href="page-about.html" className="theme-btn btn-style-one hvr-light"><i className="icon fa fas fa-plus"></i><span className="btn-title">Our Services</span></a>
                                </div>
                            </div>
    
                            <div className="image-column col-lg-5 col-md-12 col-sm-12 order-lg-2 wow fadeInRight" data-wow-delay="600ms">
                                <div className="inner-column">
                                    <div className="image-box">
                                        <figure className="image overlay-anim"><img src="/images/resource/service2-1.jpg" alt=""/></figure>
                                    </div>
                                    <div className="experience bounce-y">
                                        <div className="inner">
                                            <strong>2,896</strong>
                                            <div className="text">Packaged Shipped in 2023</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};
export default Funfact1
