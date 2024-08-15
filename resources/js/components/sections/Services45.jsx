import { Link } from 'react-router-dom';
const Services45 = () => {
    return (
        <>
        <div className="services-section-five">
            <div className="auto-container">
                <div className="row align-items-center">
                    <div className="image-column col-xl-6">
                        <div className="inner-column">
                            <figure className="image mb-0 overlay-anim"><Link href="page-services"><img src="/images/resource/service4-1.jpg" alt=""/></Link></figure>
                        </div>
                    </div>
                    <div className="content-column col-xl-6">
                        <div className="inner-column">						
                            <div className="sec-title style-three light">
                                <span className="sub-title">Service Package</span>
                                <h2>Provide Quality Services</h2>
                            </div>
                            <div className="text">The fastest logistics solution depends on various factors, including the distance, urgency of delivery, type of goods, and available transportation options.</div>
                            <Link href="page-about.html" className="theme-btn btn-style-one hvr-light"><i className="icon fa fas fa-plus"></i><span className="btn-title">Request A Quote</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};
export default Services45