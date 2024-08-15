import { Link } from 'react-router-dom';
const Projects5 = () => {
    return (
        <>
        <section className="project-section-four">
            <div className="anim-icons full-width">
                <span className="icon shape-16"></span>
                <span className="icon shape-17"></span>
            </div>
            <div className="sec-title style-three light text-center">
                <span className="sub-title">Current Services</span>
                <h2>Most Service We Provide</h2>
            </div>
            <div className="auto-container">
                <ul className="project-block-four">
    
                  <li className="inner-box">
                      <div className="row align-items-center">
                          <div className="top-box col-md-1">
                              <div className="number">01</div>
                          </div>
    
                          <div className="center-box col-md-10">
                              <h4 className="title">Road Freight Transportation</h4>
                              <div className="text">We understand the importance of timely delivery.</div>
                            <figure className="image mb-0"><img src="/images/resource/project-2.png" alt="Image"/></figure>
                          </div>
    
                          <div className="bottom-box col-md-1">
                              <Link href="page-about" className="theme-btn btn-style-three dark-bg"><i className="icon fa fas fa-plus"></i><span className="btn-title"></span></Link>
                          </div>
                      </div>
                  </li>
                    
                  <li className="inner-box">
                      <div className="row align-items-center">
                          <div className="top-box col-md-1">
                              <div className="number">02</div>
                          </div>
    
                          <div className="center-box col-md-10">
                              <h4 className="title">Train Freight Transportation</h4>
                              <div className="text">We understand the importance of timely delivery.</div>
                            <figure className="image mb-0"><img src="/images/resource/project-2.png" alt="Image"/></figure>
                          </div>
    
                          <div className="bottom-box col-md-1">
                              <Link href="page-about" className="theme-btn btn-style-three dark-bg"><i className="icon fa fas fa-plus"></i><span className="btn-title"></span></Link>
                          </div>
                      </div>
                  </li>
                    
                  <li className="inner-box">
                      <div className="row align-items-center">
                          <div className="top-box col-md-1">
                              <div className="number">03</div>
                          </div>
    
                          <div className="center-box col-md-10">
                              <h4 className="title">Ocean Freight Transportation</h4>
                              <div className="text">We understand the importance of timely delivery.</div>
                            <figure className="image mb-0"><img src="/images/resource/project-2.png" alt="Image"/></figure>
                          </div>
    
                          <div className="bottom-box col-md-1">
                              <Link href="page-about" className="theme-btn btn-style-three dark-bg"><i className="icon fa fas fa-plus"></i><span className="btn-title"></span></Link>
                          </div>
                      </div>
                  </li>
                    
                  <li className="inner-box">
                      <div className="row align-items-center">
                          <div className="top-box col-md-1">
                              <div className="number">04</div>
                          </div>
    
                          <div className="center-box col-md-10">
                              <h4 className="title">Air Freight Transportation</h4>
                              <div className="text">We understand the importance of timely delivery.</div>
                            <figure className="image mb-0"><img src="/images/resource/project-2.png" alt="Image"/></figure>
                          </div>
    
                          <div className="bottom-box col-md-1">
                              <Link href="page-about" className="theme-btn btn-style-three dark-bg"><i className="icon fa fas fa-plus"></i><span className="btn-title"></span></Link>
                          </div>
                      </div>
                  </li>
                </ul>
            </div>
        </section>
        </>
    );
};
export default Projects5