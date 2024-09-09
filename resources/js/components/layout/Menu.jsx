
import { NavLink } from 'react-router-dom';

export default function Menu() {
    // Define styles for active and inactive links
    const linkStyle = {
        textDecoration: 'none',
        color: 'black'
    };

    const activeLinkStyle = {
        textDecoration: 'none',
        color: 'red',  // Highlight color for the active link
        fontWeight: 'bold'  // Optional: Make it bold
    };

    return (
        <>
            <ul className="navigation" style={{ listStyle: 'none', padding: 0 }}>
                <li>
                    <NavLink 
                        to="/" 
                        style={({ isActive }) => isActive ? activeLinkStyle : linkStyle}>
                        Home
                    </NavLink>
                    {/* 
                    <ul style={{ display: 'none' }}>
                        <li><NavLink to="/" style={({ isActive }) => isActive ? activeLinkStyle : linkStyle}>Home page 01</NavLink></li>
                        <li><NavLink to="/index-2" style={({ isActive }) => isActive ? activeLinkStyle : linkStyle}>Home page 02</NavLink></li>
                        ...
                    </ul> 
                    */}
                </li>
                <li className="dropdown">
                    <NavLink 
                        to="/about"
                        style={({ isActive }) => isActive ? activeLinkStyle : linkStyle}>
                        Pages
                    </NavLink>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li><NavLink to="/about" style={({ isActive }) => isActive ? activeLinkStyle : linkStyle}>About</NavLink></li>
                        <li className="dropdown">
                            <NavLink to="/team" style={({ isActive }) => isActive ? activeLinkStyle : linkStyle}>
                                Team
                            </NavLink>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li><NavLink to="/team" style={({ isActive }) => isActive ? activeLinkStyle : linkStyle}>Team Grid</NavLink></li>
                                <li><NavLink to="/team-details" style={({ isActive }) => isActive ? activeLinkStyle : linkStyle}>Team Details</NavLink></li>
                            </ul>
                        </li>
                        <li><NavLink to="/pricing" style={({ isActive }) => isActive ? activeLinkStyle : linkStyle}>Pricing</NavLink></li>
                        <li><NavLink to="/testimonial" style={({ isActive }) => isActive ? activeLinkStyle : linkStyle}>Testimonial</NavLink></li>
                        <li><NavLink to="/faq" style={({ isActive }) => isActive ? activeLinkStyle : linkStyle}>FAQ</NavLink></li>
                        <li><NavLink to="/error" style={({ isActive }) => isActive ? activeLinkStyle : linkStyle}>404</NavLink></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <NavLink to="/services" style={({ isActive }) => isActive ? activeLinkStyle : linkStyle}>
                        Services
                    </NavLink>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li><NavLink to="/services" style={({ isActive }) => isActive ? activeLinkStyle : linkStyle}>Services Grid</NavLink></li>
                        <li><NavLink to="/service-details" style={({ isActive }) => isActive ? activeLinkStyle : linkStyle}>Service Details</NavLink></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <NavLink to="/agences" style={({ isActive }) => isActive ? activeLinkStyle : linkStyle}>
                        agences
                    </NavLink>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li><NavLink to="/agences" style={({ isActive }) => isActive ? activeLinkStyle : linkStyle}>agences Grid</NavLink></li>
                        <li><NavLink to="/project-details" style={({ isActive }) => isActive ? activeLinkStyle : linkStyle}>Project Details</NavLink></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <NavLink to="/news-grid" style={({ isActive }) => isActive ? activeLinkStyle : linkStyle}>
                        News
                    </NavLink>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li><NavLink to="/news-grid" style={({ isActive }) => isActive ? activeLinkStyle : linkStyle}>News Grid</NavLink></li>
                        <li><NavLink to="/news-details" style={({ isActive }) => isActive ? activeLinkStyle : linkStyle}>News Details</NavLink></li>
                    </ul>
                </li>
                <li>
                    <NavLink to="/contact" style={({ isActive }) => isActive ? activeLinkStyle : linkStyle}>
                        Contact
                    </NavLink>
                </li>
            </ul>
        </>
    );
}

































































// import { Link } from 'react-router-dom';

// export default function Menu() {

//     return (
//         <>
//             <ul className="navigation">
//                 <li className="current"><Link to="/">Home</Link>
//                     {/* <ul>
//                         <li><Link to="/">Home page 01</Link></li>
//                         <li><Link to="/index-2">Home page 02</Link></li>
//                         <li><Link to="/index-3">Home page 03</Link></li>
//                         <li><Link to="/index-4">Home page 04</Link></li>
//                         <li><Link to="/index-5">Home page 05</Link></li>
//                     </ul> */}
//                 </li>
//                 <li className="dropdown"><Link to="/about">Pages</Link>
//                     <ul>
//                         <li><Link to="/about">About</Link></li>
//                         <li className="dropdown"><Link to="/team">Team</Link>
//                             <ul>
//                                 <li><Link to="/team">Team Grid</Link></li>
//                                 <li><Link to="/team-details">Team Details</Link></li>
//                             </ul>
//                         </li>
//                         <li><Link to="/pricing">Pricing</Link></li>
//                         <li><Link to="/testimonial">Testimonial</Link></li>
//                         <li><Link to="/faq">FAQ</Link></li>
//                         {/* <li className="dropdown"><Link to="/product">Shop</Link>
//                             <ul>
//                                 <li><Link to="/product">Shop Grid</Link></li>
//                                 <li><Link to="/shop-product-details">Shop Details</Link></li>
//                                 <li><Link to="/shop-products-sidebar">Shop Sidebar</Link></li>
//                                 <li><Link to="/shop-cart">Shop Cart</Link></li>
//                                 <li><Link to="/shop-checkout">Shop Checkout</Link></li>
//                             </ul>
//                         </li> */}
//                         <li><Link to="/error">404</Link></li>
//                     </ul>
//                 </li>
//                 <li className="dropdown"><Link to="/services">Services</Link>
//                     <ul>
//                         <li><Link to="/services">Services Grid</Link></li>
//                         <li><Link to="/service-details">Service Details</Link></li>
//                     </ul>
//                 </li>
//                 <li className="dropdown"><Link to="/agences">agences</Link>
//                     <ul>
//                         <li><Link to="/agences">agences Grid</Link></li>
//                         <li><Link to="/project-details">Project Details</Link></li>
//                     </ul>
//                 </li>
//                 <li className="dropdown"><Link to="/news-grid">News</Link>
//                     <ul>
//                         <li><Link to="/news-grid">News Grid</Link></li>
//                         <li><Link to="/news-details">News Details</Link></li>
//                     </ul>
//                 </li>
//                 <li><Link to="/contact">Contact</Link></li>
//             </ul>
//         </>
//     )
// }
