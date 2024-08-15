import { Link } from 'react-router-dom';
const About4 = () => {
    return (
        <>
	<section className="about-section-four">
		<div className="auto-container">
			<div className="row align-items-center">
				<div className="content-column col-lg-6 order-2">
					<div className="inner-column">
						<div className="sec-title style-three">
							<span className="sub-title">About Our Company</span>
							<h2>We’re globally Logistics <br/>solutions you can trust <br/>our company.</h2>
						</div>
						<div className="text">Fusce a fermentum non consequat lacus vitaenim, cras suspendise iaculis etiam ad mus pharetra ultricies, potenti eget penatibus dictum vulputate commodo metus ltricies ut enim eget per porttitor.</div>
						<div className="row">
							<ul className="list-style-two col-sm-6">
								<li>Effective Improvement</li>
								<li>Expert Transport Officers</li>
							</ul>
							<ul className="list-style-two col-sm-6">
								<li>Happy Customers</li>
								<li>Safety & reliable Service</li>
							</ul>
						</div>
						<Link href="page-about" className="theme-btn btn-style-one hvr-light"><i className="icon fa fas fa-plus"></i><span className="btn-title">Request A Quote</span></Link>
					</div>
				</div>

				<div className="image-column col-lg-6 order-lg-2">
					<div className="inner-column">
						<div className="image-box">
							<figure className="image-1 mb-0 overlay-anim"><img src="/images/resource/about4-2.jpg" alt=""/></figure>
							<figure className="image-2 mb-0 overlay-anim"><img src="/images/resource/about4-1.jpg" alt=""/></figure>
							<div className="experience bounce-y">
								<strong>25</strong>
								<div className="text">Years Experience</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
        </>
    );
};
export default About4