import dynamic from 'next/dynamic'
const CounterUp = dynamic(() => import('../components/elements/CounterUp'), {
    ssr: false,
})
const Funfact4 = () => {
    return (
        <>
        <section className="fun-fact-section-two">
            <div className="auto-container">
                <div className="fun-fact-box">
                    <div className="fact-counter">
                        <div className="row">

                            <div className="counter-block-two col-xl-3 col-md-6 col-sm-12 wow fadeInUp">
                                <div className="inner justify-content-xl-start">
                                    <div className="icon-box">
                                        <i className="icon flaticon-delivery-box-4"></i>
                                    </div>
                                    <div className="content-box">
                                        <div className="count-box"><CounterUp count={20869} time={3} />
                                        </div>
                                        <div className="counter-title">Successfully delivery</div>
                                    </div>
                                </div>
                            </div>

                            <div className="counter-block-two col-xl-3 col-md-6 col-sm-12 wow fadeInUp">
                                <div className="inner justify-content-xl-center">
                                    <div className="icon-box">
                                        <i className="icon flaticon-international-shipping-2"></i>
                                    </div>
                                    <div className="content-box">
                                        <div className="count-box"><CounterUp count={869} time={3} />
                                        </div>
                                        <div className="counter-title">Worldwide client’s</div>
                                    </div>
                                </div>
                            </div>

                            <div className="counter-block-two col-xl-3 col-md-6 col-sm-12 wow fadeInUp">
                                <div className="inner justify-content-xl-center">
                                    <div className="icon-box">
                                        <i className="icon flaticon-3d-cube"></i>
                                    </div>
                                    <div className="content-box">
                                        <div className="count-box"><CounterUp count={189} time={3} />
                                        </div>
                                        <div className="counter-title">Client products</div>
                                    </div>
                                </div>
                            </div>

                            <div className="counter-block-two col-xl-3 col-md-6 col-sm-12 wow fadeInUp">
                                <div className="inner justify-content-xl-end">
                                    <div className="icon-box">
                                        <i className="icon flaticon-3d-cube"></i>
                                    </div>
                                    <div className="content-box">
                                        <div className="count-box"><CounterUp count={163} time={3} />
                                        </div>
                                        <div className="counter-title">Total KM reach so far</div>
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
export default Funfact4
