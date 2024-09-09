import { Link } from 'react-router-dom';

export default function Footer4() {
    return (
        <>
        <footer className="main-footer" style={{ backgroundImage: 'url(images/background/8.jpg)' }}>
    
                {/* Widgets Section */}
        <div className="widgets-section style-two">
            <div className="auto-container">
                <div className="row">

                    <div className="footer-column col-xl-4 col-lg-4 col-md-6 col-sm-6">
                        <div className="footer-widget about-widget">
                            <div className="logo"><Link href="/"><img src="/images/sah.png" width={100} alt="" /></Link></div>
                            <div className="text">Feugiat bibendum risus conubia massa suscipit <br/>nullam arcu fusce curae hase sollicitudin lacinia <br/>magna potenti mattis facilisi litora nisi.</div>
                            <ul className="social-icon-six">
								<li><Link href="#"><i className="fab fa-facebook"></i></Link></li>
								<li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
								<li><Link href="#"><i className="fab fa-youtube"></i></Link></li>
							</ul>
                        </div>
                    </div>

                    <div className="footer-column col-xl-2 col-lg-2 col-md-6 col-sm-6 offset-xl-1">
                        <div className="footer-widget company-widget style-two">
                            <h3 className="widget-title">Our Divisions</h3>
                            <ul className="user-links">
                                <li><Link href="page-about">About Us</Link></li>
                                <li><Link href="page-team">Our Team</Link></li>
                                <li><Link href="/">Our Clients</Link></li>
                                <li><Link href="/">Available Positions</Link></li>
                                <li><Link href="/">Job Application</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer-column col-xl-2 col-lg-3 col-md-6 col-sm-6">
                        <div className="footer-widget company-widget">
                            <h3 className="widget-title">Company Service</h3>
                            <ul className="user-links">
                                <li><Link href="/">Request a Freight</Link></li>
                                <li><Link href="/">Track & Trace</Link></li>
                                <li><Link href="/">Air Freight</Link></li>
                                <li><Link href="/">Rail Freight</Link></li>
                                <li><Link href="/">Maritime Transport</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer-column col-xl-2 col-lg-3 col-md-6 col-sm-6 offset-xl-1">
                        <div className="footer-widget company-widget style-two">
                            <h3 className="widget-title">Contact Us</h3>
                            <ul className="user-links">
                                <li><Link href="/">Find Us Here</Link></li>
                                <li><Link href="/">Get In Touch</Link></li>
                                <li><Link href="/">FAQ Page</Link></li>
                                <li><Link href="/">Global Network</Link></li>
                                <li><Link href="/">Support 24/7</Link></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>


                    {/*  Footer Bottom */}
        <div className="footer-bottom style-two">
            <div className="auto-container">
                <div className="inner-container">
                    <div className="copyright-text">
                        <p>Copyright © 2024 TranSend. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
        </footer>

        </>
    )
}
