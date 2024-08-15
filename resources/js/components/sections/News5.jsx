import { Link } from 'react-router-dom';
const News5 = () => {
    return (
        <>
        <section className="news-section-four">
            <div className="auto-container">
                <div className="sec-title style-three text-center wow fadeInUp">
                    <span className="sub-title">Service Package</span>
                    <h2>Latest Blog Updates</h2>
                </div>

                <div className="row">
                    
                    <div className="news-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><Link href="news-details"><img src="/images/resource/news-9.jpg" alt=""/></Link></figure>
                            </div>
                            <div className="content-box">
                                <ul className="post-info">
                                    <li>Augest 19, 2023</li>
                                    <li>Modern Place</li>
                                </ul>
                                <h4 className="title"><Link href="news-details">Transforming Transparency and Trust in Supply Chains</Link></h4>
                                <Link href="page-about" className="theme-btn btn-style-two"><i className="icon fa fas fa-plus"></i><span className="btn-title">Learn More</span></Link>
                            </div>
                        </div>
                    </div>
                    
                    <div className="news-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><Link href="news-details"><img src="/images/resource/news-10.jpg" alt=""/></Link></figure>
                            </div>
                            <div className="content-box">
                                <ul className="post-info">
                                    <li>Augest 19, 2023</li>
                                    <li>Modern Place</li>
                                </ul>
                                <h4 className="title"><Link href="news-details">Innovative Approaches for Urban Delivery Optimization</Link></h4>
                                <Link href="page-about" className="theme-btn btn-style-two"><i className="icon fa fas fa-plus"></i><span className="btn-title">Learn More</span></Link>
                            </div>
                        </div>
                    </div>
                    
                    <div className="news-block-two col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><Link href="news-details"><img src="/images/resource/news-11.jpg" alt=""/></Link></figure>
                            </div>
                            <div className="content-box">
                                <ul className="post-info">
                                    <li>Augest 19, 2023</li>
                                    <li>Modern Place</li>
                                </ul>
                                <h4 className="title"><Link href="news-details">Lessons Learned and Strategies for Future Preparedness</Link></h4>
                                <Link href="page-about" className="theme-btn btn-style-two"><i className="icon fa fas fa-plus"></i><span className="btn-title">Learn More</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};
export default News5