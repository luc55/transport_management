import dynamic from 'next/dynamic'
const CounterUp = dynamic(() => import('../components/elements/CounterUp'), {
    ssr: false,
})
const Funfact2 = () => {
    return (
        <>
        <section className="fun-fact-section style-two">
            <div className="anim-icons full-width">
                <span className="icon shape-11"></span>
            </div>
            <div className="sec-title light text-center wow fadeInUp">
                <span className="sub-title">Get to know us</span>
                <h2>Protect the things you <br/>Care about here.</h2>
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
                                        <i className="icon flaticon-3d-cube"></i>
                                    </div>
                                    <div className="content-box">
                                        <div className="count-box"><CounterUp count={650} time={3} /></div>
                                        <h6 className="counter-title">Supply Engineers</h6>
                                    </div>
                                </div>
                            </div>

                            <div className="counter-block col-xxl-3 col-xl-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                                <div className="inner justify-content-center">
                                    <div className="icon-box">
                                        <i className="icon flaticon-international-shipping-2"></i>
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
                                        <i className="icon flaticon-global"></i>
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
            </div>
        </section>
        </>
    );
};
export default Funfact2
