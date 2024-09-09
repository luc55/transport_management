'use client'
import { Link } from 'react-router-dom';
import { useState } from 'react'

export default function MobileMenu() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleClick = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <ul className="navigation clearfix">
                {/*Keep This Empty / Menu will come through Javascript*/}
                <li className="current dropdown"><Link to="/">Home</Link>
                    <ul style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                        <li><Link to="/">Home page 01</Link></li>
                        <li><Link to="/index-2">Home page 02</Link></li>
                        <li><Link to="/index-3">Home page 03</Link></li>
                        <li><Link to="/index-4">Home page 04</Link></li>
                        <li><Link to="/index-5">Home page 05</Link></li>
                    </ul>
                    <div className="dropdown-btn" onClick={() => handleClick(1)}><i className="fa fa-angle-down" /></div></li>     
                <li className="dropdown"><Link to="/page-about">Pages</Link>
                    <ul style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>            
                        <li><Link to="/page-about">About</Link></li>
                        <li><Link to="/page-pricing">Pricing</Link></li>
                        <li><Link to="/page-testimonial">Testimonial</Link></li>
                        <li><Link to="/page-faq">FAQ</Link></li>
                        <li><Link to="/page-error">404</Link></li>
                    </ul>
                    <div className="dropdown-btn" onClick={() => handleClick(2)}><i className="fa fa-angle-down" /></div></li>
                <li className="dropdown"><Link to="/page-team">Team</Link>
                    <ul style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                        <li><Link to="/page-team">Team Grid</Link></li>
                        <li><Link to="/page-team-details">Team Details</Link></li>
                    </ul>
                    <div className="dropdown-btn" onClick={() => handleClick(3)}><i className="fa fa-angle-down" /></div></li>
                <li className="dropdown"><Link to="/page-services">Services</Link>
                    <ul style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                        <li><Link to="/page-services">Services Grid</Link></li>
                        <li><Link to="/page-service-details">Service Details</Link></li>
                    </ul>
                    <div className="dropdown-btn" onClick={() => handleClick(4)}><i className="fa fa-angle-down" /></div></li>
                <li className="dropdown"><Link to="/page-projects">Projects</Link>
                    <ul style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}>
                        <li><Link to="/page-projects">Projects Grid</Link></li>
                        <li><Link to="/page-project-details">Project Details</Link></li>
                    </ul>
                    <div className="dropdown-btn" onClick={() => handleClick(5)}><i className="fa fa-angle-down" /></div></li>
                <li className="dropdown"><Link to="/page-product">Shop</Link>
                    <ul style={{ display: `${isActive.key == 6 ? "block" : "none"}` }}>
                        <li><Link to="/page-product">Shop Grid</Link></li>
                        <li><Link to="/shop-product-details">Shop Details</Link></li>
                        <li><Link to="/shop-products-sidebar">Shop Sidebar</Link></li>
                        <li><Link to="/shop-cart">Shop Cart</Link></li>
                        <li><Link to="/shop-checkout">Shop Checkout</Link></li>
                    </ul>
                    <div className="dropdown-btn" onClick={() => handleClick(6)}><i className="fa fa-angle-down" /></div></li>
                <li className="dropdown"><Link to="/news-grid">News</Link>
                    <ul style={{ display: `${isActive.key == 7 ? "block" : "none"}` }}>
                        <li><Link to="/news-grid">News Grid</Link></li>
                        <li><Link to="/news-details">News Details</Link></li>
                    </ul>
                    <div className="dropdown-btn" onClick={() => handleClick(7)}><i className="fa fa-angle-down" /></div></li>
                <li><Link to="/page-contact">Contact</Link></li>
            </ul>

        </>
    )
}
