import { Link } from 'react-router-dom';
import dynamic from 'next/dynamic'
const CounterUp = dynamic(() => import('../components/elements/CounterUp'), {
    ssr: false,
})
const Progress5 = () => {
    return (
        <>
			<section className="about-section-six">
				<div className="auto-container">
					<div className="row">

						<div className="image-column col-lg-6">
							<div className="inner-column">
								<div className="image-box">
									<figure className="image mb-0 overlay-anim"><img src="/images/resource/about-6.jpg" alt="Image"/></figure>
								</div>
							</div>
						</div>

						<div className="counter-column col-lg-6">
							<div className="inner-column">

								<div className="services-block">
									<div className="inner-block">
										<div className="sec-title style-three mb-0">
											<span className="sub-title">Service Package</span>
											<h2>We Provide Full Assistance in Freight & Warehousing</h2>
											<div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip eam</div>
										</div>


										<div className="skills">
											
											<div className="skill-item">
												<div className="skill-header">
													<h6 className="skill-title">ROAD TRANSPORT</h6>
												</div>
												<div className="skill-bar">
													<div className="bar-inner">
														<div className="bar progress-line" style={{width:"92%"}}>
															<div className="skill-percentage">
																<div className="count-box"><CounterUp count={92} time={3} />%</div>
															</div>
														</div>
													</div>
												</div>
											</div>
											
											<div className="skill-item">
												<div className="skill-header">
													<h6 className="skill-title">AIR TRANSPORT</h6>
												</div>
												<div className="skill-bar">
													<div className="bar-inner">
														<div className="bar progress-line" style={{width:"88%"}}>
															<div className="skill-percentage">
																<div className="count-box"><CounterUp count={88} time={3} />%</div>
															</div>
														</div>
													</div>
												</div>
											</div>
											
											<div className="skill-item">
												<div className="skill-header">
													<h6 className="skill-title">OCEAN TRANSPORT</h6>
												</div>
												<div className="skill-bar">
													<div className="bar-inner">
														<div className="bar progress-line" style={{width:"78%"}}>
															<div className="skill-percentage">
																<div className="count-box"><CounterUp count={78} time={3} />%</div>
															</div>
														</div>
													</div>
												</div>
											</div>
											
											<div className="skill-item">
												<div className="skill-header">
													<h6 className="skill-title">TRAIN TRANSPORT</h6>
												</div>
												<div className="skill-bar">
													<div className="bar-inner">
														<div className="bar progress-line" style={{width:"76%"}}>
															<div className="skill-percentage">
																<div className="count-box"><CounterUp count={76} time={3} />%</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="services-block mb-0">
									<div className="inner-block">
										<div className="sec-title style-three mb-0">
											<span className="sub-title">Service Package</span>
											<h2>Solving challenges in every industry, every day.</h2>
											<div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
										</div>

										<div className="row">
											<ul className="list-style-two style-two col-sm-6">
												<li>Web & Mobile Responsive</li>
												<li>Web & Mobile Responsive</li>
												<li>Custom Domain Support</li>
											</ul>
											<ul className="list-style-two style-two col-sm-6">
												<li>Web & Mobile Responsive</li>
												<li>Web & Mobile Responsive</li>
												<li>Custom Domain Support</li>
											</ul>
										</div>
										<Link href="page-about" className="theme-btn btn-style-two"><i className="icon fa fas fa-plus"></i><span className="btn-title">Request A Quote</span></Link>
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
export default Progress5
