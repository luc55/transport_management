import { Link } from 'react-router-dom';
const Services4 = () => {
    return (
        <>
        <section className="services-section-four">
            <div className="auto-container">
                <div className="row align-items-center">
                    <div className="content-column col-xl-5 col-lg-6">
                        <div className="inner-container">
                            <div className="sec-title mb-0 wow fadeInUp">
                                <span className="sub-title">Service Package</span>
                                <h2>We guarantee fast and <br/>safe transport for your <br/>package</h2>
                                <div className="text">The fastest logistics solution depends on various factors, <br/> including the distance, urgency of delivery, type of goods, and <br/> available transportation options.</div>
                            </div>
                        </div>
                    </div>
                    <div className="services-track-column col-xl-5 col-lg-6 offset-xl-2">
                        <div className="inner-container">
                            <div className="title-box">
                                <h5 className="title">Track & Trace Your Order</h5>
                            </div>
                            <div className="content-box">
                                <div className="text">Realtime progress as your shipment speeds <br/>through network</div>
                                <div className="form-group">
                                    <input type="text" name="your_name" placeholder="Shipment Type:" required=""/>
                                </div>
                                <div className="form-group">
                                    <input type="text" name="your_number" placeholder="Tracking Number:" required=""/>
                                </div>
                                <div className="text2">Enter up to 25 tracking numbers*</div>
    
                                <Link href="#" className="theme-btn btn-style-three"><i className="icon fa fas fa-plus"></i><span className="btn-title">Track Now!</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};
export default Services4