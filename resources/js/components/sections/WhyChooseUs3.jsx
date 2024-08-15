import { Link } from 'react-router-dom';
const WhyChooseUs3 = () => {
    return (
        <>
	<div className="why-choose-us">
		<div className="anim-icons full-width">
			<span className="icon shape-7"></span>
			<span className="icon shape-8"></span>
		</div>
		<div className="auto-container">
			<div className="row g-0 align-items-center">
				<div className="content-column col-lg-7 col-md-12 order-2">
					<div className="inner-column">
						<div className="sec-title style-three">
							<span className="sub-title">Why Should You Choose Us?</span>
							<h2>Our fleet covers your needs <br/>& pricing range</h2>
						</div>

						<div className="text">We pride ourselves on providing the best transport and shipping services available <br/>allover the world. Our skilled personnel, utilising the latest communications.</div>

						<ul className="list-style-two">
							<li>Quality Control System, 100% Satisfaction Guarantee</li>
							<li>Highly Professional Staff, Accurate Testing Processes</li>
							<li>Unrivalled workmanship, Professional and Qualified</li>
						</ul>

						<Link href="page-about" className="theme-btn btn-style-two hvr-light"><i className="icon fa fas fa-plus"></i><span className="btn-title">More About Us</span></Link>
					</div>
				</div>
				<div className="image-column col-lg-5 col-md-12 order-lg-2">
					<div className="inner-column">
						<div className="image-box">
							<figure className="image overlay-anim mb-0"><img src="/images/resource/why-choose-us-1.jpg" alt=""/></figure>
						</div>
						<div className="experience bounce-y">
							<div className="inner">
								<figure className="image overlay-anim"><img src="/images/resource/experience-1.jpg" alt=""/></figure>
								<div className="content">
									<strong>1.5M</strong>
									<div className="text">Happy Client’s</div>
								</div>
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
export default WhyChooseUs3