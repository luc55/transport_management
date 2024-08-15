import { Link } from 'react-router-dom';
const CallToAction4 = () => {
    return (
        <>
        <section className="call-to-action style-two">
            <div className="bg bg-image" style={{ backgroundImage: 'url(images/background/6.jpg)' }}></div>
            <div className="auto-container">
                <div className="title-box wow zoomIn">
                    <div className="sub-title">Let’s Discuss About Your Next Transport</div>
                    <h2 className="title">Where shipping meets satisfaction.</h2>
                    <Link href="page-contact" className="theme-btn btn-style-three hvr-light dark-bg"><i className="icon fa fas fa-plus"></i><span className="btn-title">Get a Quote</span></Link>
                    <Link href="page-contact" className="theme-btn btn-style-three hvr-light dark-bg"><i className="icon fa fas fa-plus"></i><span className="btn-title">Make a Call</span></Link>
                </div>
            </div>
        </section>
        </>
    );
};
export default CallToAction4