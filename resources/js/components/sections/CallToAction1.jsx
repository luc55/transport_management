import { Link } from 'react-router-dom';
const CallToAction1 = () => {
    return (
        <>
        <section className="call-to-action">
            <div className="bg bg-image" style={{ backgroundImage: 'url(images/background/1.jpg)' }}></div>
            <div className="auto-container">
                <div className="title-box wow zoomIn">
                    <div className="logo-box"><img src="/images/logo.png" alt=""/></div>
                    <h2 className="title">World’s Leading Contract Logistics Provider</h2>
                    <div className="text">TranSend is the world’s driving worldwide coordinations supplier — we uphold industry <br/>and exchange the worldwide trade.</div>
                    <Link href="page-contact" className="theme-btn btn-style-one hvr-light"><i className="icon fa fas fa-plus"></i><span className="btn-title">Connect With Us</span></Link>
                </div>
            </div>
        </section>
        </>
    );
};
export default CallToAction1