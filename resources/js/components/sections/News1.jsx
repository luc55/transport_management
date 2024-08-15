import { Link } from 'react-router-dom';
const News1 = () => {
    return (
        <>
        <section className="news-section pt-0">
            <div className="auto-container">
                <div className="sec-title wow fadeInUp">
                    <div className="row align-items-end">
                        <div className="col-md-6">
                            <span className="sub-title">Our Blog Posts</span>
                            <h2>Latest Blog & News</h2>
                        </div>
                        <div className="col-md-6 d-flex justify-content-md-end">
                            <Link href="page-about" className="theme-btn btn-style-one"><i className="icon fa fas fa-plus"></i><span className="btn-title">View All Posts</span></Link>
                        </div>
                    </div>
                </div>
    
                <div className="row">
                    
                    <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="300ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><Link href="news-details"><img src="/images/resource/news-1.jpg" alt=""/></Link></figure>
                            </div>
                            <div className="content-box">
                                <ul className="post-info">
                                    <li><i className="fa fa-user-circle"></i> Sowat A</li>
                                    <li><i className="fa fa-comments"></i> 256 Comments</li>
                                </ul>
                                <h4 className="title"><Link href="news-details">How Sustainable Practices Are Reshaping the...</Link></h4>
                                <Link href="news-details" className="read-more">Read More <i className="fa fa-solid fa-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    
                    <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="600ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><Link href="news-details"><img src="/images/resource/news-2.jpg" alt=""/></Link></figure>
                            </div>
                            <div className="content-box">
                                <ul className="post-info">
                                    <li><i className="fa fa-user-circle"></i> Sowat A</li>
                                    <li><i className="fa fa-comments"></i> 256 Comments</li>
                                </ul>
                                <h4 className="title"><Link href="news-details">How Sustainable Practices Are Reshaping the...</Link></h4>
                                <Link href="news-details" className="read-more">Read More <i className="fa fa-solid fa-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    
                    <div className="news-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="900ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><Link href="news-details"><img src="/images/resource/news-3.jpg" alt=""/></Link></figure>
                            </div>
                            <div className="content-box">
                                <ul className="post-info">
                                    <li><i className="fa fa-user-circle"></i> Sowat A</li>
                                    <li><i className="fa fa-comments"></i> 256 Comments</li>
                                </ul>
                                <h4 className="title"><Link href="news-details">How Sustainable Practices Are Reshaping the...</Link></h4>
                                <Link href="news-details" className="read-more">Read More <i className="fa fa-solid fa-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};
export default News1