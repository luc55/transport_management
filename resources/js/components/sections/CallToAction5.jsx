import { Link } from 'react-router-dom';
const CallToAction5 = () => {
    return (
        <>
        <section className="work-section-three pb-0">
            <div className="auto-container">
    
                <div className="work-block-three">
                    <div className="bg-image" style={{ backgroundImage: 'url(images/background/4.jpg)' }}></div>
                    <div className="inner-box">
                        <div className="sec-title style-three light mb-0">
                            <h2>Let us work together to make a difference</h2>
                            <div className="text">Vehicula sed habitasse phasellus fames suscipit ulputate venenatis </div>
                        </div>
                                
                        
                        <Link href="page-about" className="theme-btn btn-style-two hvr-light"><i className="icon fa fas fa-plus"></i><span className="btn-title">Request A Quote</span></Link>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};
export default CallToAction5