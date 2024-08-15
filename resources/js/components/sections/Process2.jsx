import { Link } from 'react-router-dom';
const Process2 = () => {
    return (
        <>
        <section className="work-section-two">
            <div className="anim-icons full-width">
                <span className="icon shape-12"></span>
            </div>
            <div className="auto-container">
                <div className="sec-title light style-two text-center wow fadeInUp">
                    <span className="sub-title">Our Work Process</span>
                    <h2>Make 4 Simple Steps</h2>
                </div>
    
                <div className="outer-box">
                    <div className="inner-outer">
                        <div className="row">
                            
                            <div className="work-block-two col-xl-3 col-lg-4 col-md-6">
                                <div className="inner-box">
                                    <div className="number">01</div>
                                    <div className="icon-box">
                                        <i className="icon flaticon-logistics-delivery-6"></i>
                                    </div>
                                    <h4 className="title"><Link href="page-service-details">Order Processing</Link></h4>
                                    <div className="text">The logistics process to <br/> begins with the..</div>
                                </div>
                            </div>
                            
                            <div className="work-block-two col-xl-3 col-lg-4 col-md-6">
                                <div className="inner-box">
                                    <div className="number">02</div>
                                    <div className="icon-box">
                                        <i className="icon flaticon-container-2"></i>
                                    </div>
                                    <h4 className="title"><Link href="page-service-details">Warehousing</Link></h4>
                                    <div className="text">Goods that are ready for <br/> shipment...</div>
                                </div>
                            </div>
                            
                            <div className="work-block-two col-xl-3 col-lg-4 col-md-6">
                                <div className="inner-box">
                                    <div className="number">03</div>
                                    <div className="icon-box">
                                        <i className="icon flaticon-stock-1"></i>
                                    </div>
                                    <h4 className="title"><Link href="page-service-details">Order Tracking</Link></h4>
                                    <div className="text">Real-time tracking systems <br/> are used to monitor</div>
                                </div>
                            </div>
                            
                            <div className="work-block-two col-xl-3 col-lg-4 col-md-6">
                                <div className="inner-box">
                                    <div className="number">04</div>
                                    <div className="icon-box">
                                        <i className="icon flaticon-delivery-box-4"></i>
                                    </div>
                                    <h4 className="title"><Link href="page-service-details">Product Delivery</Link></h4>
                                    <div className="text">In the final stage of logistics <br/> services, the...</div>
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
export default Process2