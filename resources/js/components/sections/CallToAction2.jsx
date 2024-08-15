import { Link } from 'react-router-dom';
const CallToAction2 = () => {
    return (
        <>
        <section className="call-to-action-two">
            <div className="auto-container">
                <div className="outer-box">
                    <div className="row">
                        
                        <div className="contact-info-block col-lg-6">
                            <div className="inner">
                                <div className="content-box">
                                    <i className="icon flaticon-customer-service"></i>
                                    <div className="info-box">
                                        <span>Call Us Now</span>
                                        <Link href="tel:(+925) 8158 2246">(+925) 8158 2246</Link>
                                    </div>
                                </div>
                                <Link href="tel:(+925) 8158 2246" className="theme-btn btn-style-one"><i className="icon fa fas fa-plus"></i><span className="btn-title">Call Now</span></Link>
                            </div>
                        </div>
                        
                        <div className="contact-info-block col-lg-6 mb-0">
                            <div className="inner">
                                <div className="content-box">
                                    <i className="icon flaticon-delivery-courier"></i>
                                    <div className="info-box">
                                        <span>Mail Anytime</span>
                                        <a href="mailto:info@logisend.com">Info@logisend.com</a>
                                    </div>
                                </div>
                                <Link href="mailto:info@logisend.com" className="theme-btn btn-style-one"><i className="icon fa fas fa-plus"></i><span className="btn-title">Mail Now</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};
export default CallToAction2