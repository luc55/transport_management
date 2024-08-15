import dynamic from 'next/dynamic'
const CounterUp = dynamic(() => import('../components/elements/CounterUp'), {
    ssr: false,
})
const Progress2 = () => {
    return (
        <>
		<section className="work-progress">
			<div className="auto-container">
				<div className="row">
					<div className="content-column col-xl-6 order-2"
						data-wow-delay="600ms">
						<div className="inner-column">
							<div className="sec-title mb-0">
								<span className="sub-title">Our Work Progress</span>
								<h2>Discover FAQ from our <br/>dedicate support</h2>
								<div className="text">Fermentum, aliquam sed volutpat consequat sagittis duis donec neque. Libero feugiat id tempus mi a, massa facilisis euismod tellus.</div>
							</div>


							<div className="skills">
								
								<div className="skill-item">
									<div className="skill-header">
										<h6 className="skill-title">ROAD TRANSPORT</h6>
									</div>
									<div className="skill-bar">
										<div className="bar-inner">
											<div className="bar progress-line" style={{width:"77%"}}>
												<div className="skill-percentage">
													<div className="count-box"><CounterUp count={77} time={3} />%</div>
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
											<div className="bar progress-line" style={{width:"85%"}}>
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
											<div className="bar progress-line" style={{width:"90%"}}>
												<div className="skill-percentage">
													<div className="count-box"><CounterUp count={82} time={3} />%</div>
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
											<div className="bar progress-line" style={{width:"98%"}}>
												<div className="skill-percentage">
													<div className="count-box"><CounterUp count={98} time={3} />%</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="image-column col-xl-6">
						<div className="inner-column">
							<div className="image-box">
								<figure className="image-1 mb-0 overlay-anim"><img src="/images/resource/work-1.jpg" alt=""/></figure>
								<figure className="image-2 mb-0 overlay-anim"><img src="/images/resource/work-2.jpg" alt=""/></figure>
								<figure className="image-3 mb-0 overlay-anim"><img src="/images/resource/work-3.jpg" alt=""/></figure>
								<div className="experience">
									<strong>25+</strong>
									<div className="text">Years of<br/>experience</div>
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
export default Progress2
