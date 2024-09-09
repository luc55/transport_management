import { Link } from 'react-router-dom';

export default function Footer1() {
    return (
        <>
        <footer className="main-footer">
            <div className="bg bg-pattern-1"></div>
    
                <div className="footer-top">
                <div className="auto-container">
                    <div className="outer-box">
                        <div className="list-style-three">
                            <Link href="#">Resources</Link>
                            <Link href="#">Documentation</Link>
                            <Link href="#">Developers</Link>
                            <Link href="#">Portfolio</Link>
                        </div>
                        <ul className="social-icon-two">
                            <li><Link href="/"><i className="fab fa-facebook"></i></Link></li>
                            <li><Link href="/"><i className="fab fa-twitter"></i></Link></li>
                            <li><Link href="/"><i className="fab fa-youtube"></i></Link></li>
                            <li><Link href="/"><i className="fab fa-skype"></i></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Widgets Section */}
            <div className="widgets-section">
                <div className="auto-container">
                    <div className="row">

                        <div className="footer-column col-xl-4 col-lg-4 col-md-6 col-sm-6">
                            <div className="footer-widget about-widget">
                                <div className="logo"><Link href="/"><img src="/images/sah.png" width={100} alt="" /></Link></div>
                                <div className="text">We understand that every business is unique, which is why we tailor our services to meet your specific needs.</div>
                            </div>
                        </div>

                        <div className="footer-column col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className="footer-widget company-widget">
                                <h3 className="widget-title">Our Company</h3>
                                <ul className="user-links">
                                    <li><Link to="/page-about">About us</Link></li>
                                    <li><Link to="/page-team">Team</Link></li>
                                    <li><Link to="/">Partners & Certifications</Link></li>
                                    <li><Link to="/">Reviews & Awards</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="footer-column col-xl-3 col-lg-3 col-md-6 col-sm-6">
                            <div className="footer-widget contact-widget">
                                <h3 className="widget-title">Contact Us</h3>
                                <ul className="user-links">
                                    <li><Link href="mailto:info@logisend.com">E: info@logisend.com</Link></li>
                                    <li><Link href="tel:+25 3692 3256">P: +25 3692 3256</Link></li>
                                    <li><Link href="tel:1-900-322-8422">T: 1-900-322-8422</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="footer-column col-xl-2 col-lg-2 col-md-6 col-sm-6">
                            <div className="footer-widget address-widget">
                                <h3 className="widget-title">Our Address</h3>
                                <div className="text">365 Hilton Street KYU 3269 <br/>Berlin, Germany</div>
                                <Link className="btn-locations" href="/">View all locations</Link>
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
