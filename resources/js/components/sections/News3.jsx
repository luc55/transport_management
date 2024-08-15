import { Link } from 'react-router-dom';
const News3 = () => {
    return (
        <>
        <div className="blog-section">
            <div className="auto-container">
                <div className="sec-title style-three">
                    <span className="sub-title">Recent Insights</span>
                    <h2>Latest Blog Posts</h2>
                </div>
                <div className="blog-block">
                    <div className="inner-box">
                        <div className="image-box">
                            <figure className="image mb-0 overlay-anim"><Link href="#"><img src="/images/resource/blog1-1.jpg" alt="Image"/></Link></figure>
                        </div>
                        <div className="content-box">
                            <ul className="post-meta">
                                <li>Augest 19, 2023</li>
                                <li>/</li>
                                <li>Modern Place</li>
                            </ul>
                            <div className="info-box">
                                <h4 className="title"><Link href="#">Transforming Transparency and Trust in Supply Chains</Link></h4>
                                <div className="text">Establishing open and transparent communication channels among supply chain partners enables better collaboration, risk management, and problem-solving.</div>
                                <Link href="page-blog" className="theme-btn btn-style-two"><i className="icon fa fas fa-plus"></i><span className="btn-title">Learn More</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="blog-block">
                    <div className="inner-box">
                        <div className="image-box">
                            <figure className="image mb-0 overlay-anim"><Link href="#"><img src="/images/resource/blog1-2.jpg" alt="Image"/></Link></figure>
                        </div>
                        <div className="content-box">
                            <ul className="post-meta">
                                <li>Augest 19, 2023</li>
                                <li>/</li>
                                <li>Modern Place</li>
                            </ul>
                            <div className="info-box">
                                <h4 className="title"><Link href="#">Navigating the Complexities of International Trade...</Link></h4>
                                <div className="text">International trade offers businesses significant opportunities for growth and expansion, enabling them to access new markets, source diverse products, and connect with a global customer base.</div>
                                <Link href="page-blog" className="theme-btn btn-style-two"><i className="icon fa fas fa-plus"></i><span className="btn-title">Learn More</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="blog-block mb-0">
                    <div className="inner-box">
                        <div className="image-box">
                            <figure className="image mb-0 overlay-anim"><Link href="#"><img src="/images/resource/blog1-3.jpg" alt="Image"/></Link></figure>
                        </div>
                        <div className="content-box">
                            <ul className="post-meta">
                                <li>Augest 19, 2023</li>
                                <li>/</li>
                                <li>Modern Place</li>
                            </ul>
                            <div className="info-box">
                                <h4 className="title"><Link href="#">Reshaping the Future of Supply Chain Management</Link></h4>
                                <div className="text">Supply chain management is undergoing a transformative revolution driven by advancements in technology, the growing emphasis on sustainability, and the need for increased...</div>
                                <Link href="page-blog" className="theme-btn btn-style-two"><i className="icon fa fas fa-plus"></i><span className="btn-title">Learn More</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};
export default News3