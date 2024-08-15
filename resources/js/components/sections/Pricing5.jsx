import { Link } from 'react-router-dom';
const Pricing5 = () => {
    return (
        <>
        <div className="pricing-section">
            <div className="anim-icons full-width">
                <span className="icon shape-20"></span>
                <span className="icon shape-21"></span>
            </div>
            <div className="auto-container">
                <div className="sec-title style-three text-center">
                    <span className="sub-title">Service Package</span>
                    <h2>Our Transportation Plans</h2>
                </div>
                <div className="row">
                    <div className="pricing-block col-lg-4 col-md-6">
                        <div className="inner-box">
                            <div className="anim-icons full-width">
                                <span className="icon shape-18"></span>
                                <span className="icon shape-19"></span>
                            </div>
                            <h4 className="title">Standard Pass</h4>
                            <h2 className="price">$120.00</h2>
                            <span className="validaty">1 Days</span>
                            <div className="features">
                                <div className="features-item">
                                    <h6 className="title">Full Conference</h6>
                                    <div className="text">(Includes workshop, coffee etc)</div>
                                </div>
                                <div className="features-item active">
                                    <h6 className="title">Live Videos</h6>
                                    <div className="text">(Can access online free)</div>
                                </div>
                                <div className="features-item active">
                                    <h6 className="title">Meet Speaker</h6>
                                    <div className="text">(Ask question privately)</div>
                                </div>
                            </div>
                            <div className="btn-box">
                                <Link href="page-about" className="theme-btn btn-style-two"><i className="icon fa fas fa-plus"></i><span className="btn-title">Request A Quote</span></Link>
                                <div className="text">Our prices includes 10% charge</div>
                            </div>
                        </div>
                    </div>
                    <div className="pricing-block col-lg-4 col-md-6">
                        <div className="inner-box">
                            <div className="anim-icons full-width">
                                <span className="icon shape-18"></span>
                                <span className="icon shape-19"></span>
                            </div>
                            <h4 className="title">Flexible Pass</h4>
                            <h2 className="price">$220.00</h2>
                            <span className="validaty">2 Days</span>
                            <div className="features">
                                <div className="features-item">
                                    <h6 className="title">Full Conference</h6>
                                    <div className="text">(Includes workshop, coffee etc)</div>
                                </div>
                                <div className="features-item">
                                    <h6 className="title">Live Videos</h6>
                                    <div className="text">(Can access online free)</div>
                                </div>
                                <div className="features-item active">
                                    <h6 className="title">Meet Speaker</h6>
                                    <div className="text">(Ask question privately)</div>
                                </div>
                            </div>
                            <div className="btn-box">
                                <Link href="page-about" className="theme-btn btn-style-two"><i className="icon fa fas fa-plus"></i><span className="btn-title">Request A Quote</span></Link>
                                <div className="text">Our prices includes 10% charge</div>
                            </div>
                        </div>
                    </div>
                    <div className="pricing-block col-lg-4 col-md-6 mb-0">
                        <div className="inner-box">
                            <div className="anim-icons full-width">
                                <span className="icon shape-18"></span>
                                <span className="icon shape-19"></span>
                            </div>
                            <h4 className="title">Business Pass</h4>
                            <h2 className="price">$320.00</h2>
                            <span className="validaty">3 Days</span>
                            <div className="features">
                                <div className="features-item">
                                    <h6 className="title">Full Conference</h6>
                                    <div className="text">(Includes workshop, coffee etc)</div>
                                </div>
                                <div className="features-item">
                                    <h6 className="title">Live Videos</h6>
                                    <div className="text">(Can access online free)</div>
                                </div>
                                <div className="features-item">
                                    <h6 className="title">Meet Speaker</h6>
                                    <div className="text">(Ask question privately)</div>
                                </div>
                            </div>
                            <div className="btn-box">
                                <Link href="page-about" className="theme-btn btn-style-two"><i className="icon fa fas fa-plus"></i><span className="btn-title">Request A Quote</span></Link>
                                <div className="text">Our prices includes 10% charge</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};
export default Pricing5