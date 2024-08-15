import { Link } from 'react-router-dom';;
const Map = () => {
    return (
        <>
	<section className="map-section">
		<iframe
			className="map"
			src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
		</iframe>

		<div className="branches-outer">
			<div className="auto-container">
				<div className="row">
					<div className="branch-block col-xl-3 offset-xl-9 col-lg-4 offset-lg-8 col-md-5 offset-md-7 col-sm-6 offset-sm-6">
						<div className="inner-box">
							<h6 className="title">Opening Hours</h6>
							<ul className="info-list">
								<li>Workdays <span>9:00 - 20:00</span></li>
								<li>Sunday <span>Close Office</span></li>
							</ul>
							<h6 className="title">Social Media</h6>
							<ul className="social-icon-five">
								<li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
								<li><Link href="#"><i className="fab fa-facebook"></i></Link></li>
								<li><Link href="#"><i className="fab fa-pinterest"></i></Link></li>
								<li><Link href="#"><i className="fab fa-instagram"></i></Link></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
        </>
    );
};
export default Map
