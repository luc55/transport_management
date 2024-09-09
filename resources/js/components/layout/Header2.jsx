import { Link } from 'react-router-dom';
import Menu from "./Menu"
import MobileMenu from "./MobileMenu"



export default function Header2({ scroll, isSearch, handleSearch, isMobileMenu, handleMobileMenu }) {
    return (
        <>
            <header className={`main-header header-style-two ${isSearch ? "moblie-search-active" : ""}`}>
            
                <div className="header-top">
                    <div className="auto-container">
                        <div className="inner-container">

                            <div className="top-left">
                                <div className="text">Welcome To Transportation Service Theme</div>
                                <div className="date">Office Hours: Mon-Fri: 09:00AM-6:00PM</div>
                            </div>

                            <div className="top-right">
                                <div className="date">Language <i className="fa fa-solid fa-sort-down"></i></div>
                                <ul className="social-icon-four">
                                    <li><Link href="#"><span className="fab fa-facebook-square"></span></Link></li>
                                    <li><Link href="#"><span className="fab fa-twitter"></span></Link></li>
                                    <li><Link href="#"><span className="fab fa-youtube"></span></Link></li>
                                    <li><Link href="#"><span className="fab fa-brands fa-linkedin"></span></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Header lower */}
                <div className="header-lower">
                    <div className="auto-container">
                        <div className="inner-container">
                            <div className="logo-box">
                                <div className="logo"><Link href="/"><img src="/images/sah.png" width={100} alt="" title="Transend"/></Link></div>
                            </div>
                            <div className="main-box">

                                <div className="nav-outer">

                                    <nav className="nav main-menu">
                                        <Menu/>
                                    </nav>
                                </div>
                            </div>


                            <div className="outer-box">
                                <a href="page-contact" className="theme-btn btn-style-one"><i className="icon fa fas fa-plus"></i><span className="btn-title">Request A Quote</span></a>

                                <div className="grid-nav-btn mobile-nav-toggler" onClick={handleMobileMenu}>
                                    <div className="inner">
                                        <img className="icons" src="/images/icons/icon-1.png" alt="Icon"/>
                                    </div>
                                </div>
                            </div>

                            <div className="mobile-nav-toggler" onClick={handleMobileMenu}><span className="icon lnr-icon-bars"></span></div>
                        </div>
                    </div>
                </div>
                {/* Mobile Menu  */}
                <div className="mobile-menu">
                    <div className="menu-backdrop" onClick={handleMobileMenu} />
                    {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
                    <nav className="menu-box">
                        <div className="upper-box">
                            <div className="nav-logo"><Link href="/"><img src="/images/sah.png" alt=""/></Link></div>
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
                                <Link href="/"><img src="/images/sah.png" alt="" /></Link>
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
            </header >

        </>
    )
}
