import { Link } from 'react-router-dom';
const Services3 = ({addClass}) => {
    return (
        <>
        <div className={`services-section-three ${addClass}`}>
            <div className="auto-container">
                <div className="row align-items-center">
                    <div className="content-column col-xl-5">
                        <div className="inner-column">
                            <div className="sec-title style-three light">
                                <span className="sub-title">Service We Provide</span>
                                <h2>We Guarantee fast and safe transport for your package</h2>
                                <div className="text">With real-time visibility, logistics teams can identify potential delays or issues in the transportation process early on and take proactive measures to address them....</div>
                            </div>
                            <div className="row">
                                <ul className="list-style-two col-sm-6">
                                    <li>Guality Control System</li>
                                    <li>Satisfaction Gurantee</li>
                                </ul>
                                <ul className="list-style-two col-sm-6">
                                    <li>Highly Professional Staff</li>
                                    <li>Profesional and Qualified</li>
                                </ul>
                            </div>
                            <Link href="page-about" className="theme-btn btn-style-two hvr-light"><i className="icon fa fas fa-plus"></i><span className="btn-title">More About Us</span></Link>
                        </div>
                    </div>
                    <div className="services-box col-xl-6 offset-xl-1">
                        <div className="row">
    
                            <div className="services-block-three col-xl-6 col-lg-4 col-md-6">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image mb-0"><Link href="page-service-details"><img src="/images/resource/service3-1.jpg" alt=""/></Link></figure>
                                    </div>
                                    <div className="content">
                                        <div className="inner">
                                            <span>Service 1</span>
                                            <h4 className="title">Road Freight</h4>
                                        </div>
                                    </div>
                                    <div className="content-box">
                                        <h4 className="title"><Link href="page-project-details">Road Freight</Link></h4>
                                        <div className="text">Train freight is commonly used for high-value...</div>
                                        <ul className="list-style-two">
                                            <li>Flexibility & Versatility</li>
                                            <li>Controlled Environment</li>
                                            <li>Speed and Efficiency</li>
                                        </ul>
                                        <Link href="page-about" className="theme-btn btn-style-two dark-bg"><i className="icon fa fas fa-plus"></i><span className="btn-title">Read Details</span></Link>
                                    </div>
                                </div>
                            </div>
    
                            <div className="services-block-three pull-up col-xl-6 col-lg-4 col-md-6">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image mb-0"><Link href="page-service-details"><img src="/images/resource/service3-4.jpg" alt=""/></Link></figure>
                                    </div>
                                    <div className="content">
                                        <div className="inner">
                                            <span>Service 2</span>
                                            <h4 className="title">Train Freight</h4>
                                        </div>
                                    </div>
                                    <div className="content-box">
                                        <h4 className="title"><Link href="page-project-details">Train Freight</Link></h4>
                                        <div className="text">Train freight is commonly used for high-value...</div>
                                        <ul className="list-style-two">
                                            <li>Flexibility & Versatility</li>
                                            <li>Controlled Environment</li>
                                            <li>Speed and Efficiency</li>
                                        </ul>
                                        <Link href="page-about" className="theme-btn btn-style-two dark-bg"><i className="icon fa fas fa-plus"></i><span className="btn-title">Read Details</span></Link>
                                    </div>
                                </div>
                            </div>
    
                            <div className="services-block-three col-xl-6 col-lg-4 col-md-6">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image mb-0"><Link href="page-service-details"><img src="/images/resource/service3-2.jpg" alt=""/></Link></figure>
                                    </div>
                                    <div className="content">
                                        <div className="inner">
                                            <span>Service 3</span>
                                            <h4 className="title">Ocean Freight</h4>
                                        </div>
                                    </div>
                                    <div className="content-box">
                                        <h4 className="title"><Link href="page-project-details">Ocean Freight</Link></h4>
                                        <div className="text">Train freight is commonly used for high-value...</div>
                                        <ul className="list-style-two">
                                            <li>Flexibility & Versatility</li>
                                            <li>Controlled Environment</li>
                                            <li>Speed and Efficiency</li>
                                        </ul>
                                        <Link href="page-about" className="theme-btn btn-style-two dark-bg"><i className="icon fa fas fa-plus"></i><span className="btn-title">Read Details</span></Link>
                                    </div>
                                </div>
                            </div>
    
                            <div className="services-block-three pull-up col-xl-6 col-lg-4 col-md-6">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image mb-0"><Link href="page-service-details"><img src="/images/resource/service3-3.jpg" alt=""/></Link></figure>
                                    </div>
                                    <div className="content">
                                        <div className="inner">
                                            <span>Service 4</span>
                                            <h4 className="title">Air Freight</h4>
                                        </div>
                                    </div>
                                    <div className="content-box">
                                        <h4 className="title"><Link href="page-project-details">Air Freight</Link></h4>
                                        <div className="text">Train freight is commonly used for high-value...</div>
                                        <ul className="list-style-two">
                                            <li>Flexibility & Versatility</li>
                                            <li>Controlled Environment</li>
                                            <li>Speed and Efficiency</li>
                                        </ul>
                                        <Link href="page-about" className="theme-btn btn-style-two dark-bg"><i className="icon fa fas fa-plus"></i><span className="btn-title">Read Details</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};
export default Services3