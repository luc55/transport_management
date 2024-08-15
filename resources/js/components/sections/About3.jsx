import { Link } from 'react-router-dom';
const About3 = () => {
    return (
        <>
	<section className="about-section-three">
		<div className="auto-container">
			<div className="row align-items-center">
				<div className="content-column col-xl-7 order-2">
					<div className="inner-column">
						<div className="sec-title style-three">
							<span className="sub-title">About Our Company</span>
							<h2>Global Logistics Solution</h2>
							<h5>The Professional Approach to development</h5>
						</div>

						<div className="outer-box">
							<div className="about-block border-bottom-0 px-0">
								<div className="icon-box">
									<i className="icon flaticon-container-2"></i>
								</div>
								<div className="content-box">
									<h5 className="title">Warehousing Storage</h5>
									<span className="text">Features-01</span>
								</div>
							</div>

							<div className="about-block border-bottom-0 border-end-0">
								<div className="icon-box">
									<i className="icon flaticon-stock-1"></i>
								</div>
								<div className="content-box">
									<h5 className="title">Easy Payment Methods</h5>
									<span className="text">Features-02</span>
								</div>
							</div>

							<div className="about-block px-0">
								<div className="icon-box">
									<i className="icon flaticon-logistics-delivery-6"></i>
								</div>
								<div className="content-box">
									<h5 className="title">24/7 Hours Support</h5>
									<span className="text">Features-03</span>
								</div>
							</div>

							<div className="about-block border-end-0">
								<div className="icon-box">
									<i className="icon flaticon-delivery-box-4"></i>
								</div>
								<div className="content-box">
									<h5 className="title">Fast & Efficient Delivery</h5>
									<span className="text">Features-04</span>
								</div>
							</div>
						</div>
						<div className="btn-box">
							<Link href="page-contact" className="theme-btn btn-style-two"><i className="icon fa fas fa-plus"></i><span className="btn-title">More About Us</span></Link>
							<Link href="page-contact" className="theme-btn btn-style-two"><i className="icon fa fas fa-plus"></i><span className="btn-title">Our Services</span></Link>
						</div>
					</div>
				</div>

				<div className="image-column col-xl-5">
					<div className="inner-column">
						<div className="image-box">
							<figure className="image-1 mb-0 overlay-anim wow fadeInUp"><img src="/images/resource/about-3.jpg" alt=""/></figure>
							<figure className="image-2 mb-0 overlay-anim wow fadeInUp"><img src="/images/resource/about-4.jpg" alt=""/></figure>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
        </>
    );
};
export default About3