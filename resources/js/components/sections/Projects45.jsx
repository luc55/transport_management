import { Link } from 'react-router-dom';
const Projects45 = () => {
    return (
        <>
        <div className="project-section-two">
            <div className="auto-container">
                <div className="sec-title style-three light">
                    <span className="sub-title">Our Portfolio</span>
                    <h2>Our Most Recent Projects <br/>We’ve Done</h2>
                </div>
                <div className="outer-box">
                    
                    <div className="project-block-two">
                    <div className="inner-box">
                        <div className="image-box">
                        <figure className="image"><Link href="page-project-details"><img src="/images/resource/project1-2.jpg" alt="Image"/></Link></figure>
                        </div>
                        <div className="content-box">
                        <Link href="page-project-details" className="theme-btn read-more"><i className="fa fa-solid fa-arrow-right"></i></Link>
                        <h4 className="title"><Link href="page-project-details">Warehouse On-Hand Inventory <br/>To Minimizes Your Spend!</Link></h4>
                        </div>
                    </div>
                    </div>
                    
                    <div className="project-block-two active">
                    <div className="inner-box">
                        <div className="image-box">
                        <figure className="image"><Link href="page-project-details"><img src="/images/resource/project1-1.jpg" alt="Image"/></Link></figure>
                        </div>
                        <div className="content-box">
                        <Link href="page-project-details" className="theme-btn read-more"><i className="fa fa-solid fa-arrow-right"></i></Link>
                        <h4 className="title"><Link href="page-project-details">Warehouse On-Hand Inventory <br/>To Minimizes Your Spend!</Link></h4>
                        </div>
                    </div>
                    </div>
                    
                    <div className="project-block-two">
                    <div className="inner-box">
                        <div className="image-box">
                        <figure className="image"><Link href="page-project-details"><img src="images/resource/project1-3.jpg" alt="Image"/></Link></figure>
                        </div>
                        <div className="content-box">
                        <Link href="page-project-details" className="theme-btn read-more"><i className="fa fa-solid fa-arrow-right"></i></Link>
                        <h4 className="title"><Link href="page-project-details">Warehouse On-Hand Inventory <br/>To Minimizes Your Spend!</Link></h4>
                        </div>
                    </div>
                    </div>
                    
                    <div className="project-block-two">
                    <div className="inner-box">
                        <div className="image-box">
                        <figure className="image"><Link href="page-project-details"><img src="/images/resource/project1-4.jpg" alt="Image"/></Link></figure>
                        </div>
                        <div className="content-box">
                        <Link href="page-project-details" className="theme-btn read-more"><i className="fa fa-solid fa-arrow-right"></i></Link>
                        <h4 className="title"><Link href="page-project-details">Warehouse On-Hand Inventory <br/>To Minimizes Your Spend!</Link></h4>
                        </div>
                    </div>
                    </div>
                    
                    <div className="project-block-two">
                    <div className="inner-box">
                        <div className="image-box">
                        <figure className="image"><Link href="page-project-details"><img src="/images/resource/project1-5.jpg" alt="Image"/></Link></figure>
                        </div>
                        <div className="content-box">
                        <Link href="page-project-details" className="theme-btn read-more"><i className="fa fa-solid fa-arrow-right"></i></Link>
                        <h4 className="title"><Link href="page-project-details">Warehouse On-Hand Inventory <br/>To Minimizes Your Spend!</Link></h4>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};
export default Projects45