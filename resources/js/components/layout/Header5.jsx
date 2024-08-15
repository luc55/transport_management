import { Link } from 'react-router-dom';
import Menu from "./Menu"
import MobileMenu from "./MobileMenu"

export default function Header5({ scroll, isMobileMenu, handleMobileMenu, isSearch, handleSearch, }) {
    return (
        <>
            <header className={`main-header header-style-five ${isSearch ? "moblie-search-active" : ""}`}>
                {/* Header Top */}
                <div className="header-top">
                    <div className="auto-container">
                        <div className="inner-container">

                            <div className="top-left">
                                <ul className="list-style-four">
                                    <li><i className="icon fa fa-phone"></i> <Link href="tel:+258 (215) 3258">+258 (215) 3258</Link></li>
                                    <li><i className="icon fa fa-envelope"></i> <Link href="support@transend.com">support@transend.com</Link></li>
                                </ul>
                            </div>

                            <div className="top-right">
                                <Link href="#">News & Media</Link>
                                <Link href="#">Careers</Link>
                                <Link href="#">Help & FAQs</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-lower">
                    <div className="auto-container">
                        <div className="inner-container">
                            <div className="logo-box">
                                <div className="logo"><Link href="/"><img src="/images/logo-2.png" alt="" title="Transend"/></Link></div>
                            </div>

                            <div className="outer-box">

                                <div className="info-box-one">
                                    <div className="inner">
                                        <div className="icon"><i className="fa fa-phone"></i></div>
                                        <div className="info">
                                            <Link href="tel:+12 3656 3215">+12 3656 3215</Link>
                                            <span>Customer Support</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="info-box-one">
                                    <div className="inner">
                                        <div className="icon"><i className="icon fa fa-map-marker-alt"></i></div>
                                        <div className="info">
                                            <Link href="#">Office Address</Link>
                                            <span>258 Hilton St, Berlin DE</span>
                                        </div>
                                    </div>
                                </div>

                                <Link href="page-contact" className="theme-btn btn-style-two"><i className="icon fa fas fa-plus"></i><span className="btn-title">Contact Us</span></Link>

                                <div className="mobile-nav-toggler" onClick={handleMobileMenu}><span className="icon lnr-icon-bars"></span></div>
                            </div>

                            <div className="mobile-nav-toggler" onClick={handleMobileMenu}><span className="icon lnr-icon-bars"></span></div>
                        </div>
                    </div>
                </div>
                <div className="header-bottom">
                    <div className="auto-container">
                        <div className="inner-container">
                            <div className="main-box">

                                <div className="nav-outer">

                                    <nav className="nav main-menu">
                                    <Menu />
                                    </nav>


                                    <div className="outer-box">
                                        <div className="ui-btn-outer">
                                            <div className="ui-btn ui-btn search-btn" onClick={handleSearch}>
                                                <span className="icon lnr lnr-icon-search"></span>
                                            </div>
                                        </div>
                                        <div className="grid-nav-btn-two mobile-nav-toggler" onClick={handleMobileMenu}>
                                            <div className="inner">
                                                <img className="icons" src="/images/icons/icon-5.png" alt="Icon"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Mobile Menu  */}
                <div className="mobile-menu">
                    <div className="menu-backdrop" onClick={handleMobileMenu} />

                    <nav className="menu-box">
                        <div className="upper-box">
                            <div className="nav-logo"><Link href="/"><img src="/images/logo.png" alt=""  /></Link></div>
                            <div className="close-btn" onClick={handleMobileMenu}><i className="icon fa fa-times" /></div>
                        </div>
                        <MobileMenu />
                        <ul className="contact-list-one">
                            <li>
                                {/* Contact Info Box */}
                                <div className="contact-info-box">
                                    <i className="icon lnr-icon-phone-handset" />
                                    <span className="title">Call Now</span>
                                    <Link href="/tel:+92880098670">+92 (8800) - 98670</Link>
                                </div>
                            </li>
                            <li>
                                {/* Contact Info Box */}
                                <div className="contact-info-box">
                                    <span className="icon lnr-icon-envelope1" />
                                    <span className="title">Send Email</span>
                                    <Link href="/mailto:help@company.com">help@company.com</Link>
                                </div>
                            </li>
                            <li>
                                {/* Contact Info Box */}
                                <div className="contact-info-box">
                                    <span className="icon lnr-icon-clock" />
                                    <span className="title">Send Email</span>
                                    Mon - Sat 8:00 - 6:30, Sunday - CLOSED
                                </div>
                            </li>
                        </ul>
                        <ul className="social-links">
                            <li><Link href="/#"><i className="fab fa-twitter" /></Link></li>
                            <li><Link href="/#"><i className="fab fa-facebook-f" /></Link></li>
                            <li><Link href="/#"><i className="fab fa-pinterest" /></Link></li>
                            <li><Link href="/#"><i className="fab fa-instagram" /></Link></li>
                        </ul>
                    </nav>
                </div>{/* End Mobile Menu */}
                {/* Header Search */}
                <div className="search-popup">
                    <span className="search-back-drop" onClick={handleSearch} />
                    <button className="close-search" onClick={handleSearch}><span className="fa fa-times" /></button>
                    <div className="search-inner">
                        <form method="post" action="">
                            <div className="form-group">
                                <input type="search" name="search-field" placeholder="Search..." required />
                                <button type="submit"><i className="fa fa-search" /></button>
                            </div>
                        </form>
                    </div>
                </div>
                {/* End Header Search */}
                {/* Sticky Header  */}
                <div className={`sticky-header ${scroll ? "fixed-header animated slideInDown" : ""}`}>
                    <div className="auto-container">
                        <div className="inner-container">
                            {/*Logo*/}
                            <div className="logo">
                                <Link href="/" ><img src="/images/logo-2.png" alt=""  /></Link>
                            </div>
                            {/*Right Col*/}
                            <div className="nav-outer">
                                {/* Main Menu */}
                                <nav className="main-menu">
                                    <div className="navbar-collapse show collapse clearfix">
                                        <Menu />
                                    </div>
                                </nav>{/* Main Menu End*/}
                                {/*Mobile Navigation Toggler*/}
                                <div className="mobile-nav-toggler" onClick={handleMobileMenu}><span className="icon lnr-icon-bars" /></div>
                            </div>
                        </div>
                    </div>
                </div>{/* End Sticky Menu */}
            </header>

        </>
    )
}
