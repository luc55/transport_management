import { Link } from 'react-router-dom';
const Services52 = () => {
    return (
        <>
        <section className="services-section-seven">
            <div className="anim-icons full-width">
                <span className="icon shape-14"></span>
                <span className="icon shape-15"></span>
            </div>
            <div className="auto-container">
                <div className="row">
                    <div className="sec-title style-three col-xl-7">
                        <span className="sub-title">Service Package</span>
                        <h2>Solving IT challenges in every <br/>industry, every day.</h2>
                        <div className="text">Efficient transportation is at the heart of a successful supply chain. We provide end-to-end transportation management services, including route planning, carrier selection, freight consolidation, and shipment tracking. Our extensive network of trusted carriers ensures reliable and timely delivery of your goods, while our advanced tracking systems provide real-time visibility, giving you complete control over your shipments.</div>
                        <Link href="page-about" className="theme-btn btn-style-two"><i className="icon fa fas fa-plus"></i><span className="btn-title">Request A Quote</span></Link>
                    </div>
                        
                    <div className="services-column col-xl-4 offset-xl-1">
                        <div className="inner-column">
                            <ul className="services-box">
                                <li><Link href="/"><i className="icon fa fa-arrow-right"></i>Transparent Pricing</Link></li>
                                <li><Link href="/"><i className="icon fa fa-arrow-right"></i>Real-Time Tracking</Link></li>
                                <li><Link href="/"><i className="icon fa fa-arrow-right"></i>Warehouse Storage</Link></li>
                                <li><Link href="/"><i className="icon fa fa-arrow-right"></i>Security For Cargo</Link></li>
                                <li><Link href="/"><i className="icon fa fa-arrow-right"></i>Easy Payment Methods</Link></li>
                                <li><Link href="/"><i className="icon fa fa-arrow-right"></i>24/7 Hours Support</Link></li>
                                <li><Link href="/"><i className="icon fa fa-arrow-right"></i>Fast & Efficient Delivery</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};
export default Services52