import { Link } from 'react-router-dom';
const Process1 = () => {
    return (
        <>
        <section className="work-section">
            <div className="anim-icons full-width">
                <span className="icon shape-1 bounce-y"></span>
            </div>
            <div className="auto-container">
                <div className="sec-title style-two text-center wow fadeInUp">
                    <span className="sub-title">Working Process</span>
                    <h2>Global Logistics Partner To World’s Famous <br/>Brands For Over 75 Years!</h2>
                </div>
    
                <div className="outer-box">
                    <div className="inner-outer">
                        <div className="row">
                            
                            <div className="work-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
                                <div className="inner-box ">
                                    <div className="icon-box">
                                        <i className="icon flaticon-logistics-delivery-6"></i>
                                    </div>
                                    <h4 className="title"><Link href="page-service-details">Order Processing</Link></h4>
                                    <div className="text">The logistics process begins with <br/> the receipt of customer...</div>
                                </div>
                            </div>
                            
                            <div className="work-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                                <div className="inner-box ">
                                    <div className="icon-box">
                                        <i className="icon flaticon-container-2"></i>
                                    </div>
                                    <h4 className="title"><Link href="page-service-details">Warehousing</Link></h4>
                                    <div className="text">Goods that are ready for shipment <br/> are stored in warehouses or...</div>
                                </div>
                            </div>
                            
                            <div className="work-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                                <div className="inner-box ">
                                    <div className="icon-box">
                                        <i className="icon flaticon-stock-1"></i>
                                    </div>
                                    <h4 className="title"><Link href="page-service-details">Order Tracking</Link></h4>
                                    <div className="text">Real-time tracking systems are <br/> used to monitor the...</div>
                                </div>
                            </div>
                            
                            <div className="work-block col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="900ms">
                                <div className="inner-box ">
                                    <div className="icon-box">
                                        <i className="icon flaticon-delivery-box-4"></i>
                                    </div>
                                    <h4 className="title"><Link href="page-service-details">Product Delivery</Link></h4>
                                    <div className="text">In the final stage of logistics <br/> services, the</div>
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
export default Process1