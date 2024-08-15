import { Link } from 'react-router-dom';
const Team4 = () => {
    return (
        <>
	<section className="team-section-three">
		<div className="anim-icons full-width">
			<span className="icon shape-13"></span>
		</div>
		<div className="auto-container">
			<div className="sec-title style-three light">
				<div className="row align-items-end">
					<div className="col-md-6">
						<span className="sub-title">Our Team Members</span>
						<h2>Meet Our Team Members</h2>
					</div>
					<div className="col-md-6 d-flex justify-content-md-end">
						<Link href="page-about" className="theme-btn btn-style-one hvr-light"><i className="icon fa fas fa-plus"></i><span className="btn-title">Request A Quote</span></Link>
					</div>
				</div>
			</div>

			<div className="row">
				
				<div className="team-block-three col-xxl-4 col-xl-6 col-md-6">
					<div className="inner-box">
						<div className="image-box">
							<figure className="image"><Link href="page-team-details"><img src="/images/resource/team3-1.png" alt=""/></Link></figure>
						</div>
						<div className="info-box">
							<span className="designation">Manager</span>
							<h4 className="name"><Link href="page-team-details">George Edward</Link></h4>
							<ul className="social-icon">
								<li><Link href="#"><i className="fab fa-facebook"></i></Link></li>
								<li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
								<li><Link href="#"><i className="fab fa-skype"></i></Link></li>
								<li><Link href="#"><img src="images/icons/icon-4.png" alt=""/></Link></li>
							</ul>
						</div>
					</div>
				</div>
				
				<div className="team-block-three col-xxl-4 col-xl-6 col-md-6">
					<div className="inner-box">
						<div className="image-box">
							<figure className="image"><Link href="page-team-details.html"><img src="/images/resource/team3-2.png" alt=""/></Link></figure>
						</div>
						<div className="info-box">
							<span className="designation">Manager</span>
							<h4 className="name"><Link href="page-team-details.html">Mia Martinez</Link></h4>
							<ul className="social-icon">
								<li><Link href="#"><i className="fab fa-facebook"></i></Link></li>
								<li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
								<li><Link href="#"><i className="fab fa-skype"></i></Link></li>
								<li><Link href="#"><img src="/images/icons/icon-4.png" alt=""/></Link></li>
							</ul>
						</div>
					</div>
				</div>
				
				<div className="team-block-three col-xxl-4 col-xl-6 col-md-6">
					<div className="inner-box">
						<div className="image-box">
							<figure className="image"><Link href="page-team-details.html"><img src="/images/resource/team3-3.png" alt=""/></Link></figure>
						</div>
						<div className="info-box">
							<span className="designation">Manager</span>
							<h4 className="name"><Link href="page-team-details.html">Michael Clark</Link></h4>
							<ul className="social-icon">
								<li><Link href="#"><i className="fab fa-facebook"></i></Link></li>
								<li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
								<li><Link href="#"><i className="fab fa-skype"></i></Link></li>
								<li><Link href="#"><img src="/images/icons/icon-4.png" alt="/"/></Link></li>
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
export default Team4