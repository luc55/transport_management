import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
const Video3 = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
        <div className="video-section">
            <div className="auto-container">
                <div className="video-block">
                    <figure className="image mb-0"><img src="/images/resource/video-1.jpg" alt="Image"/></figure>
                    <a onClick={() => setOpen(true)} className="play-now2">
                        <div className="icon-box">
                            <img className="icon" src="/images/icons/icon-3.png" alt="Image"/>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
        </>
    );
};
export default Video3
