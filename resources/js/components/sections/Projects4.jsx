import { Link } from 'react-router-dom';
const Projects4 = () => {
    return (
        <>
        <section className="project-section-three">
            <div className="auto-container">
                <ul className="project-block-three">
                  <li className="inner-box">
                      <div className="row align-items-center">
                          <div className="top-box col-lg-3">
                              <i className="icon flaticon-air"></i>
                              <h4 className="title">Ocean Freight</h4>
                          </div>
    
                          <div className="center-box col-lg-7 text-lg-center">
                              <div className="text">Providing an independent advice and identifying the right fit for you.</div>
                            <figure className="image mb-0"><img src="/images/resource/project-1.png" alt="Image"/></figure>
                          </div>
    
                          <div className="bottom-box col-lg-2">
                              <Link href="page-about" className="theme-btn btn-style-three hvr-light dark-bg"><i className="icon fa fas fa-plus"></i><span className="btn-title">View Details</span></Link>
                          </div>
                      </div>
                  </li>
                  <li className="inner-box active">
                      <div className="row align-items-center">
                          <div className="top-box col-lg-3">
                              <i className="icon flaticon-cargo-boat"></i>
                              <h4 className="title">Ocean Freight</h4>
                          </div>
    
                          <div className="center-box col-lg-7 text-lg-center">
                              <div className="text">Providing an independent advice and identifying the right fit for you.</div>
                            <figure className="image mb-0"><img src="/images/resource/project-1.png" alt="Image"/></figure>
                          </div>
    
                          <div className="bottom-box col-lg-2">
                              <Link href="page-about" className="theme-btn btn-style-three hvr-light dark-bg"><i className="icon fa fas fa-plus"></i><span className="btn-title">View Details</span></Link>
                          </div>
                      </div>
                  </li>
                  <li className="inner-box">
                      <div className="row align-items-center">
                          <div className="top-box col-lg-3">
                              <i className="icon flaticon-truck-2"></i>
                              <h4 className="title">Road Freight</h4>
                          </div>
    
                          <div className="center-box col-lg-7 text-lg-center">
                              <div className="text">Providing an independent advice and identifying the right fit for you.</div>
                            <figure className="image mb-0"><img src="/images/resource/project-1.png" alt="Image"/></figure>
                          </div>
    
                          <div className="bottom-box col-lg-2">
                              <Link href="page-about" className="theme-btn btn-style-three hvr-light dark-bg"><i className="icon fa fas fa-plus"></i><span className="btn-title">View Details</span></Link>
                          </div>
                      </div>
                  </li>
                  <li className="inner-box">
                      <div className="row align-items-center">
                          <div className="top-box col-lg-3">
                              <i className="icon flaticon-air"></i>
                              <h4 className="title">Train Freight</h4>
                          </div>
    
                          <div className="center-box col-lg-7 text-lg-center">
                              <div className="text">Providing an independent advice and identifying the right fit for you.</div>
                            <figure className="image mb-0"><img src="/images/resource/project-1.png" alt="Image"/></figure>
                          </div>
    
                          <div className="bottom-box col-lg-2">
                              <Link href="page-about" className="theme-btn btn-style-three hvr-light dark-bg"><i className="icon fa fas fa-plus"></i><span className="btn-title">View Details</span></Link>
                          </div>
                      </div>
                  </li>
                </ul>
            </div>
        </section>
        </>
    );
};
export default Projects4