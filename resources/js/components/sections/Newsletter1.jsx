const Newsletter1 = ({addClass}) => {
    return (
        <>
        <section className={`newsletter-section ${addClass}`}>
            <div className="auto-container">
                <div className="row g-0">
                    
                    <div className="contact-block col-lg-6">
                        <div className="inner-box">
    
                            <div className="contact-info-box">
                                <div className="inner-box2">
                                    <div className="icon-box">
                                        <i className="icon fa fa-solid fa-headphones"></i>
                                    </div>
                                    <div className="content-box">
                                        <h5>Help Center</h5>
                                        <div className="text">24/7 Support<br/>+(258) 629-32-238</div>
                                    </div>
                                </div>
                            </div>
    
                            <div className="contact-info-box">
                                <div className="inner-box2">
                                    <div className="icon-box">
                                        <i className="icon fa fa-map-marker-alt"></i>
                                    </div>
                                    <div className="content-box">
                                        <h5>Our Location</h5>
                                        <div className="text">USA, New York - 1060<br/>+Str. First Avenue 1</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div className="newsletter-block col-lg-6 mb-0">
                        <div className="inner-box">
                            <div className="subscribe-form">
                                <h5 className="title">Subscribe to Newsletter</h5>
                                <form method="post" action="#">
                                    <div className="form-group">
                                        <input type="email" name="email" className="email" placeholder="Enter Your Email Address" required=""/>
                                        <button type="button" className="theme-btn btn-style-one dark-bg"><i className="icon fa fas fa-plus"></i><span className="btn-title">Subscribe</span></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};
export default Newsletter1