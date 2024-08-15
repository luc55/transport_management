import { Link } from 'react-router-dom';
const About1 = ({ addClass }) => {
    return (
        <>
        <section className={`about-section-one ${addClass}`}>
            <div className="anim-icons full-width">
                <span className="icon shape-2 bounce-y"></span>
            </div>
            <div className="auto-container">
                <div className="row">
                    <div className="content-column col-xl-7 col-lg-6 col-md-12 order-2 wow fadeInRight"
                        data-wow-delay="600ms">
                        <div className="inner-column">
                            <div className="sec-title">
                                <span className="sub-title">More About Us</span>
                                <h2>Reliable Transport Solutions <br/>Saves Your Time!</h2>
                            </div>

                            <div className="text2">Welcome to Transend Logistics, a trailblazing logistics company dedicated to propelling your business towards unparalleled success.</div>

                            <div className="text">At Transend, we redefine the boundaries of supply chain management, leveraging cutting-edge technology and innovative solutions to deliver seamless logistics services to our valued clients. With a commitment to excellence, Transend takes pride in offering a comprehensive suite of services, including transportation, warehousing, inventory management, customs clearance, and last-mile delivery.</div>

                            <div className="btn-box d-flex align-items-center">
                                <Link href="page-about" className="theme-btn btn-style-one"><i className="icon fa fas fa-plus"></i><span className="btn-title">Our Services</span></Link>

                                <div className="founder-info">
                                    <div className="thumb"><img src="/images/resource/thumb-1.jpg" alt=""/></div>
                                    <div className="content">
                                        <h5 className="name">Marks Daniel</h5>
                                        <span className="designation">Chairman</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="image-column col-xl-5 col-lg-6 col-md-12 ">
                        <div className="inner-column">
                            <div className="image-box">
                                <figure className="image mb-0 overlay-anim wow fadeInUp"><img src="/images/resource/about-1.jpg" alt=""/></figure>
                                <div className="experience bounce-y">
                                    <strong>25+</strong>
                                    <div className="text">Years of<br/>Experience</div>
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
export default About1