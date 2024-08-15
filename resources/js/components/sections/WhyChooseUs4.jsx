import { useState } from 'react'
const WhyChooseUs4 = () => {
	const [isActive, setIsActive] = useState({
		status: false,
		key: 1,
	})
  
	const handleClick = (key) => {
		if (isActive.key === key) {
			setIsActive({
				status: false,
			})
		} else {
			setIsActive({
				status: true,
				key,
			})
		}
	}
    return (
        <>
	<section className="about-section-five">
		<div className="outer-box">
			<div className="row">

				<div className="image-column col-lg-6">
					<div className="inner-column">
						<div className="image-box">
							<figure className="image mb-0 overlay-anim"><img src="/images/resource/about-5.jpg" alt="Image"/></figure>
						</div>
					</div>
				</div>

				<div className="counter-column col-lg-6">
					<div className="inner-column">

						<div className="about-block">
							<div className="inner-box">
								<div className="sec-title style-three">
									<span className="sub-title">About Our Company</span>
									<h2>Few Reasons Why You <br/>Choose Us?</h2>
								</div>
								<div className="about-info">
									<div className="icon-box">
										<i className="icon flaticon-3d-cube"></i>
									</div>
									<div className="content-box">
										<h4 className="title">100% Success Rate</h4>
										<div className="text">The fastest logistics solution depends various factors, including <br/>the distance, urgency of delivery, type of goods.</div>
									</div>
								</div>
								<div className="about-info">
									<div className="icon-box">
										<i className="icon flaticon-global"></i>
									</div>
									<div className="content-box">
										<h4 className="title">Global Sustainability</h4>
										<div className="text">The fastest logistics solution depends various factors, including <br/>the distance, urgency of delivery, type of goods.</div>
									</div>
								</div>
								<div className="about-info">
									<div className="icon-box">
										<i className="icon flaticon-logistics-delivery-6"></i>
									</div>
									<div className="content-box">
										<h4 className="title">Grows Larger</h4>
										<div className="text">The fastest logistics solution depends various factors, including <br/>the distance, urgency of delivery, type of goods.</div>
									</div>
								</div>
							</div>
						</div>

						<div className="faq-block">
							<div className="inner-box">
								<div className="sec-title style-three">
									<span className="sub-title">About Our Company</span>
									<h2>Discover FAQ from <br/>Our Support</h2>
								</div>

								<ul className="accordion-box">
									<li className="accordion block">
										<div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(1)}>What are the typical stages of a construction project?
											<div className="icon fa fa-plus"></div>
										</div>
										<div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
											<div className="content">
												<div className="text">Retail, and travel, to social media, cybersecurity, adtech, & more, market leaders are leveraging web data to maintain their transt advantage. Discover how it can work for you</div>
											</div>
										</div>
									</li>
									<li className="accordion block">
										<div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(2)}>What are the typical stages of a construction project?
											<div className="icon fa fa-plus"></div>
										</div>
										<div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
											<div className="content">
												<div className="text">Retail, and travel, to social media, cybersecurity, adtech, & more, market leaders are leveraging web data to maintain their transt advantage. Discover how it can work for you</div>
											</div>
										</div>
									</li>
									<li className="accordion block">
										<div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(3)}>What are the typical stages of a construction project?
											<div className="icon fa fa-plus"></div>
										</div>
										<div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
											<div className="content">
												<div className="text">Retail, and travel, to social media, cybersecurity, adtech, & more, market leaders are leveraging web data to maintain their transt advantage. Discover how it can work for you</div>
											</div>
										</div>
									</li>
									<li className="accordion block">
										<div  className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleClick(4)}>What are the typical stages of a construction project?
											<div className="icon fa fa-plus"></div>
										</div>
										<div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
											<div className="content">
												<div className="text">Retail, and travel, to social media, cybersecurity, adtech, & more, market leaders are leveraging web data to maintain their transt advantage. Discover how it can work for you</div>
											</div>
										</div>
									</li>
								</ul>
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
export default WhyChooseUs4