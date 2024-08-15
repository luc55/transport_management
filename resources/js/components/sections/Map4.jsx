import { Link } from 'react-router-dom';;
const Map4 = () => {
    return (
        <>
		<section className="map-section style-two">
			<iframe
				className="map"
				src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
			</iframe>

			<div className="branches-outer">
				<div className="auto-container">
					<div className="row">
						
						<div className="form-column col-lg-8">
							<div className="inner-column">
								<div className="contact-form">
									<div className="sec-title style-three">
										<span className="sub-title">Service Package</span>
										<h2>Get in touch with us</h2>
										<div className="text">Lorem ipsum dolor sit amet, cons ectetur adipiscing elitull am aliqu am velit rutrum dictum lobortis, turpis justo auc tor quam</div>
									</div>
									<form method="post" action="get" id="contact-form">
										<div className="row">
											<div className="form-group col-lg-6">
												<input type="text" name="full_name" placeholder="Your Name" required/>
											</div>
											<div className="form-group col-lg-6">
												<input type="text" name="Email" placeholder="Email Address" required/>
											</div>
											<div className="form-group">
												<textarea name="message" placeholder="Write a Message" required></textarea>
											</div>
											<div className="form-group">
												<Link href="#" className="theme-btn btn-style-one"><i className="icon fa fas fa-plus"></i><span className="btn-title">Request A Quote</span></Link>
											</div>
										</div>
									</form>
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
export default Map4
