import { Link } from 'react-router-dom';
import React, { useState } from 'react';
const ContactTab2 = () => {
  
  const [activeIndex, setActiveIndex] = useState(1);

  const handleOnClick = (index) => {
      setActiveIndex(index); // remove the curly braces
  };
    return (
        <>
        <div className="contact-section">
          <div className="outer-box">
            <div className="bg bg-image" style={{ backgroundImage: 'url(images/background/5.jpg)' }}></div>
            <div className="auto-container">
              <div className="row tabs-box">
                <div className="contact-info col-xl-6">
                  <div className="inner-column">
                    <div className="sec-title">
                      <span className="sub-title">Get A Quote</span>
                      <h2>Make an Appointment</h2>
                    </div>
                    <div className="contact-tabs">
                      <ul className="tab-buttons clearfix">
                        <li className={activeIndex === 1 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(1)} data-tab="#tab1">Request A Quote</li>
                        <li className={activeIndex === 2 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(2)} data-tab="#tab2">Track & Trace</li>
                      </ul>
                      <div className="tabs-content">
                        <div className={activeIndex === 1 ? "tab active-tab" : "tab"}>
                          <div className="text">We’re happy to answer any question you may have and help you determine which of our services best fit your needs.</div>
                          <div className="contact-info-block">
                            <div className="content-box">
                              <i className="icon flaticon-customer-service"></i>
                              <div className="info-box">
                                <span>Call Us Now</span>
                                <Link href="tel:(+925) 8158 2246">(+925) 8158 2246</Link>
                              </div>
                            </div>
                          </div>
                          <div className="services-info-block">
                            <div className="inner-box">
                              <h4 className="title">Our Service Benifits:</h4>
                              <div className="text">We’re happy to answer any question you may have and help you determine which of our services best fit your needs.</div>
                              <div className="row">
                                <ul className="list-style-two col-sm-6">
                                  <li>Guality Control System</li>
                                  <li>100% Satisfaction Gurantee</li>
                                </ul>
                                <ul className="list-style-two col-sm-6">
                                  <li>Highly Professional Staff</li>
                                  <li>Profesional and Qualified</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="work-info-block">
                            <h4 className="title">How We Works?</h4>
                            <div className="inner-box">
                              <div className="work-info-item">
                                <div className="inner">
                                  <div className="number">01</div>
                                  <div className="text mb-0">We Schedule a call at <br/>for your cargo</div>
                                </div>
                              </div>
                              <div className="work-info-item">
                                <div className="inner">
                                  <div className="number">02</div>
                                  <div className="text mb-0">We do a primary checkup <br/>with the cargo</div>
                                </div>
                              </div>
                              <div className="work-info-item">
                                <div className="inner">
                                  <div className="number">03</div>
                                  <div className="text mb-0">Then we transport to <br/>the destination</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={activeIndex === 2 ? "tab active-tab" : "tab"}>
                          <div className="text">We’re happy to answer any question you may have and help you determine which of our services best fit your needs.</div>
                          <div className="contact-info-block">
                            <div className="content-box">
                              <i className="icon flaticon-customer-service"></i>
                              <div className="info-box">
                                <span>Call Us Now</span>
                                <Link href="tel:(+925) 8158 2246">(+925) 8158 2246</Link>
                              </div>
                            </div>
                          </div>
                          <div className="services-info-block">
                            <div className="inner-box">
                              <h4 className="title">Our Service Benifits:</h4>
                              <div className="text">We’re happy to answer any question you may have and help you determine which of our services best fit your needs.</div>
                              <div className="row">
                                <ul className="list-style-two col-sm-6">
                                  <li>Guality Control System</li>
                                  <li>100% Satisfaction Gurantee</li>
                                </ul>
                                <ul className="list-style-two col-sm-6">
                                  <li>Highly Professional Staff</li>
                                  <li>Profesional and Qualified</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="work-info-block">
                            <h4 className="title">How We Works?</h4>
                            <div className="inner-box">
                              <div className="work-info-item">
                                <div className="inner">
                                  <div className="number">01</div>
                                  <div className="text mb-0">We Schedule a call at <br/>for your cargo</div>
                                </div>
                              </div>
                              <div className="work-info-item">
                                <div className="inner">
                                  <div className="number">02</div>
                                  <div className="text mb-0">We do a primary checkup <br/>with the cargo</div>
                                </div>
                              </div>
                              <div className="work-info-item">
                                <div className="inner">
                                  <div className="number">03</div>
                                  <div className="text mb-0">Then we transport to <br/>the destination</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="contact-form col-xl-6">
                  <div className="inner-column">
                    <div className="contact-form">
                      <div className="title-box">
                        <h4 className="title">Schedule a Free Calculation</h4>
                      </div>

                      <form method="post" action="get" id="contact-form">
                        <div className="row">

                          <div className="col-lg-6 form-group">
                            <label htmlFor="yourName" className="form-label">Your name</label>
                            <input type="text" name="your_name" id="yourName" placeholder="" required=""/>
                          </div>

                          <div className="col-lg-6 form-group">
                            <label htmlFor="emailAddress" className="form-label">Email address</label>
                            <input type="text" name="email_address" id="emailAddress" placeholder="" required=""/>
                          </div>

                          <div className="col-md-6 col-sm-12 form-group">
                            <label>Company / Individual</label>
                            <select className="custom-select">
                              <option value="">Select Option</option>
                              <option value="">Air Freight</option>
                              <option value="">Ocean Freight</option>
                              <option value="">Rail transport</option>
                              <option value="">Cargo ship</option>
                              <option value="">Bulk cargo</option>
                            </select>
                          </div>

                          <div className="col-md-6 col-sm-12 form-group">
                            <label>Freight type</label>
                            <select className="custom-select">
                              <option value="">Select Option</option>
                              <option value="">Air Freight</option>
                              <option value="">Ocean Freight</option>
                              <option value="">Rail transport</option>
                              <option value="">Cargo ship</option>
                              <option value="">Bulk cargo</option>
                            </select>
                          </div>
                          
                          <div className="col-lg-6 form-group">
                            <label htmlFor="departureCity" className="form-label">Departure City</label>
                            <input type="text" name="departure_city" id="departureCity" placeholder="" required=""/>
                          </div>
                          
                          <div className="col-lg-6 form-group">
                            <label htmlFor="deliveryCity" className="form-label">Delivery City</label>
                            <input type="text" name="delivery_city" id="deliveryCity" placeholder="" required=""/>
                          </div>
                          
                          <div className="col-md-3 form-group">
                            <label htmlFor="Weight" className="form-label">Weight</label>
                            <input type="text" name="weight" id="Weight" placeholder="" required=""/>
                          </div>
                          
                          <div className="col-md-3 form-group">
                            <label htmlFor="Height" className="form-label">Height</label>
                            <input type="text" name="height" id="Height" placeholder="" required=""/>
                          </div>
                          
                          <div className="col-md-3 form-group">
                            <label htmlFor="Width" className="form-label">Width</label>
                            <input type="text" name="width" id="Width" placeholder="" required=""/>
                          </div>
                          
                          <div className="col-md-3 form-group">
                            <label htmlFor="Length" className="form-label">Length</label>
                            <input type="text" name="length" id="Length" placeholder="" required=""/>
                          </div>


                          <div className="form-group">
                            <label htmlFor="Message" className="form-label">Message</label>
                            <textarea name="message" id="Message" placeholder="" required></textarea>
                          </div>

                          <div className="check-box">
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" defaultChecked/>
                              <label className="form-check-label" htmlFor="flexRadioDefault1">Fragile</label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                              <label className="form-check-label" htmlFor="flexRadioDefault2">Express Delivery</label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"/>
                              <label className="form-check-label" htmlFor="flexRadioDefault3">Insurance</label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4"/>
                              <label className="form-check-label" htmlFor="flexRadioDefault4">Packaging</label>
                            </div>
                          </div>


                          <div className="form-group">
                            <Link href="page-contact" className="theme-btn btn-style-one"><i className="icon fa fas fa-plus"></i><span className="btn-title">Cost Calculation</span></Link>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
    );
};
export default ContactTab2
