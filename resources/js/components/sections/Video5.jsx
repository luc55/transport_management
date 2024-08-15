import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
const Video5 = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
        <div className="video-section-two">
            <div className="anim-icons full-width">
                <span className="icon shape-22 bounce-x"></span>
            </div>
            <div className="auto-container">
                <div className="row align-items-end">
                    <div className="content-column col-xl-5 order-2">
                        <div className="sec-title style-three">
                            <span className="sub-title">Service Package</span>
                            <h2>Why You Should <br/>Choose Us?</h2>
                            <div className="text">There are many variations of passages of Lorem <br/>Ipsum available, but the majority have suffered <br/>alteration in some form.</div>
                        </div>
                        <ul className="list-style-two">
                            <li>Emergency mechanical business solutions</li>
                            <li>Top quality services with reasonable price</li>
                            <li>Reliable & experienced contractors</li>
                        </ul>
                    </div>
                    <div className="image-column col-xl-7 order-xl-2">
                        <div className="inner-column">
                            <figure className="image mb-0"><img src="/images/background/7.jpg" alt="Image"/></figure>
                            <div className="video-box">
                              <div className="btn-box">
                                <a onClick={() => setOpen(true)} className="play-now lightbox-image"><i className="icon fa fa-play" aria-hidden="true"></i></a>
                              </div>
                            </div>
                            <div className="experience">
                                <div className="inner">
                                    <i className="icon flaticon-team"></i>
                                    <h5 title="title">Dedicated <br/>Customer <br/>Teams</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
        </>
    );
};
export default Video5
