import { Link } from 'react-router-dom';

const ServiceGrid = () => {
  return (
    <>
    <section className="service-section pt-120 pb-90">
      <div className="auto-container">
        <div className="row">
  
          <div className="services-block col-xl-6 wow fadeInUp">
            <div className="inner-box">
              <div className="content-box">
                <span className="sub-title">Service 2</span>
                <h4 className="title"><Link href="page-service-details">Train Freight</Link></h4>
                <div className="text">We’ll keep your items damage <br/>free solution</div>
                <ul className="list-style-two">
                  <li>Flexibility & Versatility</li>
                  <li>Controlled Environment</li>
                  <li>Speed and Efficiency</li>
                </ul>
                <Link href="page-service-details" className="theme-btn btn-style-one"><i className="icon fa fas fa-plus"></i><span className="btn-title">Read Details</span></Link>
              </div>
              <div className="image-box">
                <figure className="image mb-0"><Link href="page-service-details"><img src="images/resource/service-2.jpg" alt=""/></Link></figure>
              </div>
            </div>
          </div>
  
          <div className="services-block col-xl-6 wow fadeInUp" data-wow-delay="300ms">
            <div className="inner-box">
              <div className="content-box">
                <span className="sub-title">Service 1</span>
                <h4 className="title"><Link href="page-service-details">Ocean Freight</Link></h4>
                <div className="text">We’ll keep your items damage <br/>free solution</div>
                <ul className="list-style-two">
                  <li>Flexibility & Versatility</li>
                  <li>Controlled Environment</li>
                  <li>Speed and Efficiency</li>
                </ul>
                <Link href="page-service-details" className="theme-btn btn-style-one"><i className="icon fa fas fa-plus"></i><span className="btn-title">Read Details</span></Link>
              </div>
              <div className="image-box">
                <figure className="image mb-0"><Link href="page-service-details"><img src="images/resource/service-1.jpg" alt=""/></Link></figure>
              </div>
            </div>
          </div>
  
          <div className="services-block col-xl-6 wow fadeInUp" data-wow-delay="300ms">
            <div className="inner-box">
              <div className="content-box">
                <span className="sub-title">Service 1</span>
                <h4 className="title"><Link href="page-service-details">Ocean Freight</Link></h4>
                <div className="text">We’ll keep your items damage <br/>free solution</div>
                <ul className="list-style-two">
                  <li>Flexibility & Versatility</li>
                  <li>Controlled Environment</li>
                  <li>Speed and Efficiency</li>
                </ul>
                <Link href="page-service-details" className="theme-btn btn-style-one"><i className="icon fa fas fa-plus"></i><span className="btn-title">Read Details</span></Link>
              </div>
              <div className="image-box">
                <figure className="image mb-0"><Link href="page-service-details"><img src="images/resource/service-1.jpg" alt=""/></Link></figure>
              </div>
            </div>
          </div>
  
          <div className="services-block col-xl-6 wow fadeInUp" data-wow-delay="400ms">
            <div className="inner-box">
              <div className="content-box">
                <span className="sub-title">Service 2</span>
                <h4 className="title"><Link href="page-service-details">Train Freight</Link></h4>
                <div className="text">We’ll keep your items damage <br/>free solution</div>
                <ul className="list-style-two">
                  <li>Flexibility & Versatility</li>
                  <li>Controlled Environment</li>
                  <li>Speed and Efficiency</li>
                </ul>
                <Link href="page-service-details" className="theme-btn btn-style-one"><i className="icon fa fas fa-plus"></i><span className="btn-title">Read Details</span></Link>
              </div>
              <div className="image-box">
                <figure className="image mb-0"><Link href="page-service-details"><img src="images/resource/service-2.jpg" alt=""/></Link></figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      
    </>
  );
};
export default ServiceGrid
