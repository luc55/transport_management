import { Link } from 'react-router-dom';

export default function Footer3() {
    return (
        <>
        <footer className="main-footer style-two">
            <div className="anim-icons full-width">
                <span className="icon shape-9"></span>
                <span className="icon shape-10"></span>
            </div>
    
                {/* Widgets Section */}
                <div className="widgets-section">
                    <div className="auto-container">
                        <div className="row">

                            <div className="footer-column col-xl-3 col-lg-3 col-md-6 col-sm-6">
                                <div className="footer-widget about-widget">
                                    <div className="logo"><Link href="/"><img src="/images/logo-2.png" alt="" /></Link></div>
                                    <ul className="contact-info">
                                        <li><i className="fa fa-map-marker-alt"></i> 215 Ulta Market Ave, Brooklyn <br/> CA, 159336</li>
                                        <li><i className="fa fa-envelope"></i> <Link href="mailto:supports@busimax.com">supports@busimax.com</Link></li>
                                        <li><i className="fa fa-phone-square"></i> <Link href="tel:+125 (1456) 12565">+125 (1456) 12565</Link></li>
                                    </ul>
                                    <ul className="social-icon-six">
                                        <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
                                        <li><Link href="#"><i className="fab fa-facebook"></i></Link></li>
                                        <li><Link href="#"><i className="fab fa-pinterest"></i></Link></li>
                                        <li><Link href="#"><i className="fab fa-instagram"></i></Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="footer-column col-xl-3 col-lg-3 col-md-6 col-sm-6">
                                <div className="footer-widget services-widget">
                                    <h4 className="widget-title">Our Services</h4>
                                    <ul className="user-links">
                                        <li><Link href="/">Just in Time Delivery</Link></li>
                                        <li><Link href="/">Time Based Service Levels</Link></li>
                                        <li><Link href="/">Warehousing Management</Link></li>
                                        <li><Link href="/">Global Stock Transparency</Link></li>
                                        <li><Link href="/">Transport Consolidation</Link></li>
                                        <li><Link href="/">Shipment Tracking</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="footer-column col-xl-2 offset-xl-1 col-lg-3 col-md-6 col-sm-6">
                                <div className="footer-widget links-widget">
                                    <h4 className="widget-title">Useful Links</h4>
                                    <ul className="user-links">
                                        <li><Link href="page-compnay">Our Compnay</Link></li>
                                        <li><Link href="page-about">About Us</Link></li>
                                        <li><Link href="page-news">Latest News</Link></li>
                                        <li><Link href="page-contact">Contact Us</Link></li>
                                        <li><Link href="/">Privacy Policy</Link></li>
                                        <li><Link href="page-team">Team Member</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="footer-column col-xl-2 offset-xl-1 col-lg-3 col-md-6 col-sm-6">
                                <div className="footer-widget links-widget">
                                    <h4 className="widget-title">Useful Links</h4>
                                    <ul className="user-links">
                                        <li><Link href="page-compnay">Our Compnay</Link></li>
                                        <li><Link href="page-about">About Us</Link></li>
                                        <li><Link href="page-news">Latest News</Link></li>
                                        <li><Link href="page-contact">Contact Us</Link></li>
                                        <li><Link href="/">Privacy Policy</Link></li>
                                        <li><Link href="page-team">Team Member</Link></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                    {/*  Footer Bottom */}
                    <div className="footer-bottom">
                        <div className="auto-container">
                            <div className="inner-container">
                                <div className="copyright-text">
                                    <p>Copyright © 2024 TranSend. All Rights Reserved.</p>
                                </div>

                                <ul className="copyright-right">
                                    <Link href="/">Terms & Conditions</Link>
                                    <Link href="/">Privacy Policy</Link>
                                </ul>
                            </div>
                        </div>
                    </div>
        </footer>

        </>
    )
}
